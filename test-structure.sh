#!/bin/bash

echo "🧪 Testing FamBot Apps Structure"
echo "================================="

# Test 1: Check if all app directories exist
echo "📁 Checking app directories..."
for app in discord-bot hasura postgres; do
    if [ -d "apps/$app" ]; then
        echo "✅ apps/$app exists"
    else
        echo "❌ apps/$app missing"
        exit 1
    fi
done

# Test 2: Check if essential files exist
echo ""
echo "📄 Checking essential files..."

# Discord bot files
files=(
    "apps/discord-bot/package.json"
    "apps/discord-bot/Dockerfile"
    "apps/discord-bot/src/index.ts"
    "apps/discord-bot/compose.yml"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file exists"
    else
        echo "❌ $file missing"
        exit 1
    fi
done

# Hasura files
if [ -d "apps/hasura/metadata" ]; then
    echo "✅ apps/hasura/metadata exists"
else
    echo "❌ apps/hasura/metadata missing"
    exit 1
fi

if [ -d "apps/hasura/migrations" ]; then
    echo "✅ apps/hasura/migrations exists"
else
    echo "❌ apps/hasura/migrations missing"
    exit 1
fi

# Test 3: Check if main compose file references new paths
echo ""
echo "🔧 Checking compose.yml configuration..."
if grep -q "apps/discord-bot" compose.yml; then
    echo "✅ compose.yml references new discord-bot path"
else
    echo "❌ compose.yml doesn't reference new discord-bot path"
    exit 1
fi

if grep -q "apps/postgres" compose.yml; then
    echo "✅ compose.yml references new postgres path"
else
    echo "❌ compose.yml doesn't reference new postgres path"
    exit 1
fi

# Test 4: Try building discord bot
echo ""
echo "🏗️  Testing Discord bot build..."
if docker compose build fambot > /dev/null 2>&1; then
    echo "✅ Discord bot builds successfully"
else
    echo "❌ Discord bot build failed"
    exit 1
fi

echo ""
echo "🎉 All tests passed! The new apps structure is working correctly."
echo ""
echo "Next steps:"
echo "1. Run 'docker compose up -d' to start all services"
echo "2. Check logs with 'docker compose logs [service-name]'"
echo "3. Remove old files after confirming everything works"
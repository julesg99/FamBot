const { HASURA_GRAPHQL_ADMIN_SECRET } = process.env;

const baseHeaders = {
    'Content-Type': 'application/json',
    "Accept": "application/json",
    'x-hasura-admin-secret': HASURA_GRAPHQL_ADMIN_SECRET,
}

export { baseHeaders };
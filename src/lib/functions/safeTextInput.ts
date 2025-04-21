import { TextInputBuilder, TextInputStyle } from "discord.js";

export function safeTextInput({
  customId,
  label,
  placeholder,
  minLength = 1,
  maxLength = 4000,
  required = true,
  style = TextInputStyle.Short,
  value,
}: {
  customId: string;
  label: string;
  placeholder?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  style?: TextInputStyle;
  value?: string;
}) {
  const input = new TextInputBuilder()
    .setCustomId(customId.slice(0, 100)) // Discord limits CustomId to 100 chars
    .setLabel(label.slice(0, 45)) // Discord label max length is 45
    .setStyle(style)
    .setRequired(required)
    .setMinLength(minLength)
    .setMaxLength(maxLength);

  if (value && value.length > 0) {
    input.setValue(value.slice(0, maxLength)); // Only set value if non-empty
  }

  return input;
}

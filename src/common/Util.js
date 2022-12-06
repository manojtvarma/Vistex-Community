export function toggleInputType(input) {
  console.log(input);
  if (input.type == "password") {
    input.type = "text";
  } else {
    input.type = "password";
  }
}

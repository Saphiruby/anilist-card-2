import { request, gql } from "graphql-request";

const USERNAME = "ninevicious";

const query = gql`  query ($name: String) {
    User(name: $name) {
      id
      name
    }
  }`;

try {
const data = await request(
"https://graphql.anilist.co",
query,
{ name: USERNAME }
);

console.log("ANIList OK !");
console.log("Utilisateur :", data.User);
} catch (error) {
console.error("ANILIST ERROR");
console.error("Message :", error.message);
console.error("Response :", JSON.stringify(error.response, null, 2));
console.error("Request :", JSON.stringify(error.request, null, 2));
throw error;
}

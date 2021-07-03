export default function({ $auth, redirect }) {
  if ($auth.loggedIn) {
    console.log($auth.loggedIn);

    redirect("/question-list");
  }
}

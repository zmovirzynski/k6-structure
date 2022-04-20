import http from "k6/http";
import { sleep, check } from "k6";

export default function() {
  let res = http.get("https://swapi.dev/api/people/1/");
  sleep(1);

  check(res, {
      "status is 200": (r) => r.status === 200,
      "Verify Name": (r) => JSON.parse(r.body).name == "Luke Skywalker",
      "Body size is 10.000 bytes": (r) => r.body.length <= 10000
  });
}

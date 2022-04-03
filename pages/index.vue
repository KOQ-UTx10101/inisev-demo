<script lang="ts">
import Vue from "vue";

import { Context } from "@nuxt/types";

export default Vue.extend({
  name: "IndexPage",
  middleware({ redirect }: Context) {
    return redirect("/users");
  },
});
</script>

<template>
  <div class="container">
    <div class="q-pa-md">
      <q-markup-table>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-right">Name</th>
            <th class="text-right">Email</th>
            <th class="text-right">Phone</th>
            <th class="text-right">Password</th>
            <th class="text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userDetail" :key="user.account_id">
            <td class="text-left">{{ user.account_id }}</td>
            <td class="text-right">{{ user.account_name }}</td>
            <td class="text-right">{{ user.eamil }}</td>
            <td class="text-right">{{ user.phone }}</td>
            <td class="text-right">{{ user.account_password }}</td>
            <td class="text-right"><button @click="deleteData(user.account_id)">delete</button></td>
          </tr>
        </tbody>
      </q-markup-table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      action: "",
      apiurl: "http://localhost/myaccount/api-account.php",
      userDetail: "",
    };
  },
  methods: {
    getData() {
      let t = this;
      axios
        .post(this.apiurl, {
          action: "select",
        })
        .then((res) => {
          console.log(res.data);
          t.userDetail = res.data;
        });
    },
    deleteData(id) {
      const c = confirm("are you sure delete.");
      if (c) {
        axios
          .post(this.apiurl, {
            action: "delete",
            id: id,
          })
          .then((res) => {
            console.log(res.data);
            this.getData();
          });
      }
      else return
    },
  },
  created() {
    this.getData();
  },
};
</script>

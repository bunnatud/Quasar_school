<template>
  <q-layout view="hHh Lpr lFf">
    <q-page-container class="bg-grey-2">
      <div @keyup="nextItem">
        <q-page
          padding
          class="row items-center justify-center"
          style="background: linear-gradient(#FE3d3d, #F2C037)"
        >
          <div class="row full-width">
            <div class="col-md-8 offset-md-2 col-xs-12 q-pa-xs">
              <q-card flat class="bg-white text-black">
                <q-card-section class="bg-blue">
                  <h4 class="text-h5 text-white q-my-xs text-center">
                    {{ title }}
                  </h4>
                </q-card-section>
                <div class="row full-width">
                  <div class="col-md-12 col-xs-12 q-pa-xs">
                    <q-form autofocus @submit="onsubmit">
                      <q-card-section>
                        <div class="text-h6">
                          Sarasas
                        </div>
                        <div class="text-subtitle1">
                          กรอกสมัครข้อมูลนักเรียนสารสาสน์
                        </div>
                      </q-card-section>
                      <q-separator inset />
                      <q-card-section class="column q-gutter-md">
                        <q-input
                          label="Name *"
                          v-model="FormState.name"
                          :rules="[
                            (val) =>
                              (val && val.length > 0) ||
                              'จื้อจำเป๋นต้องใส่ข้อมูลโตยเน้อ',
                          ]"
                        ></q-input>
                        <q-input
                          label="Email *"
                          v-model="FormState.email"
                          :rules="[
                            (val) =>
                              validateEmail(val) ||
                              'สุมาเต๊อะเจ้า ใส่อีเมลโตยเน้อเจ้า',
                          ]"
                        ></q-input>
                        <q-input
                          label="Phone"
                          v-model="FormState.phone"
                          mask="(###) ### - ####"
                          hint="(###) ### - ####"
                        ></q-input>
                        <q-input
                          label="Password *"
                          type="password"
                          v-model="FormState.password.value"
                          :rules="[
                            (password) =>
                              validatePassword(password) ||
                              'ใส่รหัสหื้อมันงามๆหน่อยเน้อเจ้า',
                          ]"
                        >
                        </q-input>
                        <q-input
                          label="Confirm Password *"
                          type="password"
                          v-model="FormState.password.confirm"
                        >
                        </q-input>
                      </q-card-section>
                      <q-card-actions align="right">
                        <q-btn flat>ยกเลิก</q-btn>
                        <q-btn color="primary" type="submit"
                          >ยืนยันการลงทะเบียน</q-btn
                        >
                      </q-card-actions>
                    </q-form>
                  </div>
                </div>
              </q-card>
            </div>
          </div>
        </q-page>
      </div>
    </q-page-container>
  </q-layout>
</template>
<script>
import axios from 'axios';

export default {
  name: "Montfort",
  components: {},
  data() {
    return {
      action: "",
      apiurl: "http://localhost/myaccount/api-account.php",
      FormState: {
        name: "",
        email: "",
        phone: "",
        password: {
          value: "",
          confirm: "",
        },
      },
    };
  },
  methods: {
    validateEmail(email) {
      return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);
    },

    validatePassword(password) {
      // Test length
      var length = password.length >= 8;

      // Test capital
      var capital = /^(?=.*[A-Z]).*$/.test(password);

      // Test number
      var number = /^(?=.*[0-9]).*$/.test(password);

      // Test symbol
      var symbol = /^(?=.*[!@#$%^&*-_+=]).*$/.test(password);

      return length && capital && number && symbol;
    },
    onsubmit() {
      axios
        .post(this.apiurl, {
          action: "insert",
          name: this.FormState.name,
          email: this.FormState.email,
          phone: this.FormState.phone,
          password: this.FormState.password.value,
        })
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
    },
  },
  mounted() {},
};
</script>

<style></style>

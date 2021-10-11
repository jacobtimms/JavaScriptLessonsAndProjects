<template>
  <div class="container-fluid">
    <div class="row" id="loginForm">
      <div id="border-line" class="col-md-6" style="text-align: center">
        <div style="display: inline-block; text-align: left">
          <h1>Login</h1>
          <form id="customer_login" name="customer_login">
            <label for="customer_email">Email:</label>
            <input
              v-model="customer_email"
              type="email"
              id="customer_email"
              name="customer_email"
            />

            <label for="customer_password">Password:</label>
            <input
              v-model="customer_password"
              type="password"
              id="customer_password"
              name="customer_password"
            />
            <a id="forgotPw" href="#"
              ><label for="customer_password">Forgot your password?</label></a
            >
            <button
              type="submit"
              class="button button--primary button--submit"
              @click="validateForm1"
            >
              Sign In
            </button>
          </form>
          <p class="or">────── OR ───────</p>
        </div>
      </div>
      <div class="col-md-6" style="text-align: center">
        <div style="display: inline-block; text-align: left">
          <h1>Create Account</h1>
          <form id="create_customer" name="create_customer">
            <label for="first_name">First Name:</label>
            <input
              v-model="first_name"
              type="text"
              id="first_name"
              name="first_name"
            />

            <label for="last_name">Last Name:</label>
            <input
              v-model="last_name"
              type="text"
              id="last_name"
              name="last_name"
            />

            <label for="email">Email:</label>
            <input v-model="email" type="email" id="email" name="email" />

            <label for="password">Password:</label>
            <input
              v-model="password"
              type="password"
              id="password"
              name="password"
            />

            <div id="accepts_marketing" class="checkbox">
              <label for="marketing"
                >SIGN UP FOR OUR NEWSLETTER:
                <input
                  class="radio-inline"
                  type="checkbox"
                  name="customer[accepts_marketing]"
                  checked="checked"
                  value="true"
                  id="marketing"
                  style="margin-left: 0.1rem"
                />
              </label>
            </div>
            <button
              type="submit"
              class="button button--primary button--submit"
              @click="validateForm2"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customer_email: null,
      customer_password: null,
      first_name: null,
      last_name: null,
      email: null,
      password: null,
    };
  },
  methods: {
    validateForm1() {
      if (
        (this.customer_email == null || this.customer_email == "",
        this.customer_password == null || this.customer_password == "")
      ) {
        alert("Please Fill In All Required Field");
      } else {
        this.$router.push({ name: "Index" });
      }
    },
    validateForm2() {
      if (
        (this.firstName == null || this.firstName == "",
        this.lastName == null || this.lastName == "",
        this.email == null || this.email == "",
        this.password == null || this.password == "")
      ) {
        alert("Please Fill In All Required Field");
      } else {
        this.$router.push({ name: "Index" });
      }
    },
  },
};
</script>

<style scoped>
body {
  background-color: rgb(151, 146, 146);
}

.container-fluid {
  position: fixed;
  overflow-y: auto;
  height: 100%;
}

/* Login Form*/

.col-md-6 {
  white-space: nowrap;
}
@media (max-width: 767px) {
  .col-md-6 {
    padding-bottom: 8%;
  }
}

#loginForm {
  padding: 12% 18% 10% 12%;
  color: white;
  font-family: "Hind", sans-serif;
}
@media (max-width: 767px) {
  #loginForm {
    padding-top: 6rem;
  }
}

/*style dividing border line*/
#border-line {
  border-right-color: rgb(201, 198, 198);
  border-right-width: 1px;
  border-right-style: solid;
}
@media (max-width: 767px) {
  #border-line {
    border-right-color: transparent;
  }
}

#customer_login label {
  display: block;
  padding-top: 3%;
}

#customer_login a {
  color: white;
}

#forgotPw:hover {
  color: rgb(238, 238, 238);
}

#create_customer label {
  display: block;
  padding-top: 3%;
}

.button--primary {
  color: rgb(65, 63, 63);
  background-color: white;
  text-align: left;
  padding: 0.2rem 0.8rem;
  margin-top: 0.5rem;
  transition: 0.3s;
  text-align: center;
  border-width: 0.1rem;
  border-style: solid;
  border-color: rgb(114, 111, 111);
}

.button--primary:hover {
  background-color: rgb(151, 146, 146);
  color: white;
  border-color: white;
}

input[type="text"] {
  width: 15em;
}
input[type="email"] {
  width: 15em;
}
input[type="password"] {
  width: 15em;
}

.or {
  color: transparent;
}
@media (max-width: 767px) {
  .or {
    color: rgb(201, 198, 198);
    padding-top: 20%;
  }
}
</style>
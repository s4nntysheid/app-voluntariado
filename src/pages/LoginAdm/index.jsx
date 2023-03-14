import React from "react";

import "./style.css";

function LoginAdm() {
  

  return (
    <div>
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <form>
        <h3>Login Adm</h3>

        <label for="username">Username</label>
        <input type="text" placeholder="E-mail" id="username" />

        <label for="password">Password</label>
        <input type="password" id="password" />

        <button>Log In</button>
        <div class="social">
          <div class="lider"><i class="lider"></i><a href="/pages/Lider-login/index.html">Lider? logue aqui!</a></div>
        </div>
      </form>
    </div>
  );
}

export default LoginAdm;

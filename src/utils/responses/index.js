
import Swal from "sweetalert2"

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
})

// Success Responses
const loginSuccess = () => {
  Toast.fire({
    type: "success",
    icon: "success",
    title: "Logged in successfully",
  })
}


// Error Responses
const loginError = () => {
  Toast.fire({
    type: "error",
    icon: "error",
    title: "Login Error",
  })
}

const successResponses = {
  login: loginSuccess,
 
}

const errorResponses = {
  login: loginError,
}

const ALERT_RESPONSES = {
  successResponses,
  errorResponses,
}

export default ALERT_RESPONSES

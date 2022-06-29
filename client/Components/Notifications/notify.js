import {toast} from "react-toastify";

export const Success = (msg) => {
    return toast.success(msg, {
        position: "bottom-right"
    })
}

export const Error = (msg) => {
    return toast.error(msg, {
        position: "bottom-right"
    })
}

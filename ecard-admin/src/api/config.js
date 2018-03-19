import axios from 'axios'
import {indicator} from '../util'
import router from '../router'
import {USER_LOGIN} from '../constant'

const isDevEnv = () => {
    if (window.location.host == 'dev.ba.dui.ai' || 
        ~window.location.host.indexOf('localhost')
    ) {
        return true;
    }
    return false;
}

let root;
if (isDevEnv()) {
    root = 'http://120.27.216.199:9080';
} else {
    let host = location.host;
    let protocol = location.protocol;
    root = `${protocol}//${host.replace('admin-', '')}`;
}


/**
 *  携带cookie
 **/
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
	function (response) {
        indicator.hideBusy()
        if (response.data.code == 200) {
            return response;
        }

        if (response.data.code == 801 ||
            response.data.code == 802 ||
            response.data.code == 804
        ) {  
            router.push({name: USER_LOGIN})
            return Promise.reject(response.data.result);
        }

        indicator.error(response.data.msg+','+response.data.result);
        return Promise.reject(response.data.result);           
	},
	function (error) {
		indicator.error('服务器错误')
		return Promise.reject(error);
	}
);


export {
    root
}
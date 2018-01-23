'use strict';

let api = {
    send: (config) => {
        let {method, endpoint, callback} = config;
        let xhr = new XMLHttpRequest();
        let success = callback.success;
        let error = callback.error;
        let progress = callback.progress;
        console.log('%cin api, sending...', 'background: black; color: white');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                success(xhr.responseText);
            } else {
                if (error) xhr.addEventListener('error', error);
            }
        }

        if (progress) xhr.addEventListener('progress', progress);
        xhr.open(method, endpoint);
        xhr.send();
    }
};

export default api;
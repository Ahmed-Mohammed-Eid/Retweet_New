const redirectAndReload = (url) => {
    return new Promise((resolve, reject) => {
        window.location.href = url;
        window.location.reload();
        resolve();
    });
};


export default redirectAndReload;
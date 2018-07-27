// app/router.js
module.exports = app => {
    const { router, controller } = app;
    router.get('/api/get/test', controller.index.getTest);
};
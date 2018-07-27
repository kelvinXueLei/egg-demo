module.exports = {
    vo: {
        toJson(data) {
            return {
                status: 200,
                Msg: 'ok',
                data: JSON.parse(JSON.stringify(data)),
            }
        },

        fail(str) {
            return {
                status: 500,
                Msg: str,
                data: null
            }
        },
        noLogin(str) {
            return {
                status: 403,
                Msg: str,
                data: null
            }
        }
    },
    errHandler(error, type = false) {
        let Msg = '服务器错误!'
        if (type) {
            this.logger.error(new Error(error));
        } else {
            Msg = error;
        }
        return {
            status: 500,
            Msg: Msg,
            data: null
        }
    }
};
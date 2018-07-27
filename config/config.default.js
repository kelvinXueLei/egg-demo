exports.keys = 'aaaaa'
exports.mysql = {
    default: {
        connectionLimit: 50,
    },
    client: {
        host: '',
        port: '',
        user: '',
        password: '',
        database: '',
    },
};

exports.redis = {
    client: {
        port: '', // Redis port
        host: '', // Redis host
        password: '',
        db: 0,
    },
}
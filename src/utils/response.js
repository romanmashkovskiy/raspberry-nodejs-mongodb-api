export const successResponse = (res, payload, status = 200, json = true) => {
    res.status(status)[json ? 'json' : 'send'](payload);
};

export const errorResponse = (res, err, json = true) => res.status(err.status || 500)[json ? 'json' : 'send']({
    ...err,
    message: err.message && err.message,
    stack: err.stack && err.stack.split('\n')
});
exports.filedownload = async (session, models, vars) => {
    session.openFile(vars.download);
};
exports.dialog_alert = async (session, models, vars) => {
    await session.alert(vars.dialog.message);
    session.transform.notemptyrepofore2e_2.acceptDialog();
};
exports.dialog_confirm = async (session, models, vars) => {
    if(await session.confirm(vars.dialog.message)) {
        session.transform.notemptyrepofore2e_2.acceptDialog();
    } else {
        session.transform.notemptyrepofore2e_2.dismissDialog();
    }
};
exports.dialog_prompt = async (session, models, vars) => {
    let prompt = await session.prompt(vars.dialog.message, { value: vars.dialog.defaultPrompt});
    if(prompt != null) {
        session.transform.notemptyrepofore2e_2.acceptDialog(prompt);
    } else {
        session.transform.notemptyrepofore2e_2.dismissDialog();
    }
};
exports.dialog_beforeunload = async (session, models, vars) => {
    if(await session.confirm(vars.dialog.message, {okLabel: 'Leave'})) {
        session.transform.notemptyrepofore2e_2.acceptDialog();
    } else {
        session.transform.notemptyrepofore2e_2.dismissDialog();
    }
};
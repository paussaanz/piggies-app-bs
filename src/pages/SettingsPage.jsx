import FormInput from "../components/Form/FormInput";

const SettingsPage = () => {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-2 position-fied">
                </div>
                <div className="col-10 pt-5 ps-5">
                    <div className="row">
                        <form>
                            <div className="col-5 text-uppercase">
                                <FormInput placeholder="NAME" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
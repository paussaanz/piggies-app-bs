import FormInput from "../FormInput/FormInput";
import FormOptions from "../FormOptions/FormOptions";

const Form = () => {
    return (
       
            <form className="row">
                <div className="col-6">
                <FormOptions number="01" title="Communication" />
                <FormOptions number="02" title="Planning" />
                <FormOptions number="03" title="Marketing" />
                <FormOptions number="04" title="Social Media" />
                <FormOptions number="05" title="Design" />
                </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-6 py-3">
                        <FormInput placeholder="NAME"/>
                    </div>
                    <div className="col-6 py-3">
                        <FormInput placeholder="EMAIL"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 py-3">
                        <FormInput placeholder="PHONE"/>
                    </div>
                    <div className="col-6 py-3">
                        <FormInput placeholder="SUBJECT"/>
                    </div>
                </div>
                <FormInput placeholder="MESSAGE"/>

            </div>
            </form>
    );
};

export default Form;
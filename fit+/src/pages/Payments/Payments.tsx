import Input from "../../components/Input/Input";
import WrapperInnerContent from "../../components/WrapperInnerContent/WrapperInnerContent";
import Block from "../Analitic/components/Block/Block";
import BlockTitle from "../Analitic/components/Block/components/BlockTitle/BlockTitle";
// import styles from "./Payments.module.css";

const Payments: React.FC = () => {
    return (
        <>
            <WrapperInnerContent>
                <Block direction="column">
                    <BlockTitle title="Запрос выплаты"/>
                    <Input placeholder="123" value="" setValue={()=>{}} />
                    <Input placeholder="123" value="456" setValue={()=>{}} />
                    <Input placeholder="123" value="456" setValue={()=>{}} error="232" />
                    <Input placeholder="123" value="" setValue={()=>{}} error="232" />
                    <Input placeholder="123" value="" setValue={()=>{}} secret={true} />
                    <Input placeholder="123" value="123" setValue={()=>{}} secret={true} />
                </Block>
                <Block>
                    <BlockTitle title="Запрос выплаты"/>
                </Block>
            </WrapperInnerContent>
        </>
    )
}

export default Payments;

import DownloadTableButton from "../../components/Buttons/DownloadTable/DownloadTableButton";
import ButtonMain from "../../components/Buttons/ButtonMain/ButtonMain";
import Input from "../../components/Input/Input";
import WrapperInnerContent from "../../components/WrapperInnerContent/WrapperInnerContent";
import Block from "../../components/Block/Block";
import BlockTitle from "../../components/Block/components/BlockTitle/BlockTitle";
import TablePayments from "./components/TablePayments/TablePayments";
import styles from "./Payments.module.css";


export type TRow = {
    date: string, 
    amount: number, 
    status: string 
}


const testData: TRow[] = [
    { date: '2025-01-12', amount: 1500, status: 'Выполнено' },
    { date: '2025-02-03', amount: 890, status: 'Ожидается' },
    { date: '2025-03-15', amount: 1200, status: 'Создано' },
    { date: '2025-04-08', amount: 2450, status: 'Выполнено' },
    { date: '2025-05-22', amount: 700, status: 'Ожидается' },
    { date: '2025-06-01', amount: 0, status: 'Создано' },
    { date: '2025-06-14', amount: 1790, status: 'Выполнено' },
    { date: '2025-07-09', amount: 930, status: 'Ожидается' },
    { date: '2025-08-30', amount: 1340, status: 'Выполнено' },
    { date: '2025-09-19', amount: 650, status: 'Создано' },
    { date: '2025-10-05', amount: 2000, status: 'Выполнено' },
    { date: '2025-11-11', amount: 1580, status: 'Ожидается' },
    { date: '2025-12-24', amount: 2150, status: 'Выполнено' },
  ];

const Payments: React.FC = () => {
    return (
        <>
            <WrapperInnerContent>
                <Block direction="column">
                    <BlockTitle title="Запрос выплаты" right={true} />
                    <form action={()=>{}} className={styles.formPayments}>
                        <Input placeholder="Банк" value="" setValue={()=>{}} error="" />
                        <Input placeholder="Номер телефона" value="" setValue={()=>{}} error="" />
                        <Input placeholder="ФИО" value="" setValue={()=>{}} error="" />
                        <Input placeholder="Сумма" value="" setValue={()=>{}} error="" />
                        <ButtonMain text="Запросить выплату" type="submit" />
                    </form>
                </Block>
                <Block direction="column">
                    <BlockTitle title="Выплаты" right={true}/>
                    <TablePayments data={testData}/>
                    <div className={styles.payments__pagination}></div>
                </Block>
            </WrapperInnerContent>
        </>
    )
}

export default Payments;
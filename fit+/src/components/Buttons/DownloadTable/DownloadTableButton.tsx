import styles from "./DownloadTableButton.module.css";

interface IDownloadTableButton {
    action(): void;
    active?: boolean;
}

const DownloadTableButton: React.FC<IDownloadTableButton> = ({ action, active = true }) => {

    return (
        <div
            onClick={action}
            className={
                styles.downloadTableButton +
                (active ? "" : " " + styles.downloadTableButton_inactive)
            }
        ><div
            className={
                styles.downloadTableButton__image +
                (active ? "" : " " + styles.downloadTableButton__image_inactive)
            }
        ></div>
            <div className={styles.downloadTableButton__caption}>Скачать таблицу</div>
        </div>
    )
}

export default DownloadTableButton;
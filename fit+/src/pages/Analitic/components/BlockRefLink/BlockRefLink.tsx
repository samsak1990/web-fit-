import React, { useState } from 'react'
import styles from './BlockRefLink.module.css'


type BlockRefLinkProps = {
    link: string
}

const BlockRefLink: React.FC<BlockRefLinkProps> = ({ link }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(link).then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
            });
        }
    }
    return (
        <div className={styles.blockRefLinkRow}>
            <h3 className={styles.blockRefLink}><span>Ваша реферальная ссылка:</span> {link}</h3>
            <div style={{ position: 'relative' }}>
                <button type='button' className={styles.blockRefLink__copy} title='Копировать' onClick={handleCopy}></button>
                {copied && (
                    <span className={styles.copiedTooltip}>Скопировано!</span>
                )}
            </div>
        </div>
    )
}

export default BlockRefLink
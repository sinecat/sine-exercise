import React, {useState} from 'react';
import './styles.less'

type CollapsibleTipProps = {
    title?: string
    children?: React.ReactNode
    type?: 'note' | 'tip' | 'info' | 'warning' | 'danger'
    collapsible?: boolean
}

const CollapsibleTip = (props: CollapsibleTipProps) => {
    const {title = "解析", children, type = 'note', collapsible = false} = props

    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`rspress-directive ${type}`}>
            <div
                onClick={toggleCollapse}
                className="rspress-directive-title"
                style={{
                    display: 'flex',
                    cursor: 'pointer',
                }}
            >
                {collapsible && <div className="dropdown-btn"
                                     style={{transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)'}}>▼</div>}
                <div>{title}</div>
            </div>

            {(collapsible && isOpen || !collapsible) && (
                <div className="rspress-directive-content">
                    {children}
                </div>
            )}
        </div>
    );
};

export default CollapsibleTip;

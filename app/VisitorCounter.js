import React, { useEffect, useState } from 'react';

const Counter = () => {
    const [counterHTML, setCounterHTML] = useState(null);

    useEffect(() => {
        const counterConfig = {
            y: 'counter',
            p: 'dfefwge5hokt8', // 改成你專有的計數器名稱
            v: window.location.hostname, // 你的網址
            d: 6, // 數字位數
            r: 1, // 1=不接受Reload, 0=Reload會+1
            t: 'font158', // 字型，可選字型
            s: 100, // 指定大小，0為不指定尺寸(原寸)
            n: 0 // 指定起始的數字
        };

        const script = document.createElement('script');
        script.src = 'http://counter.i2yes.com/i2yesCounter.js';
        script.type = 'text/javascript';
        script.async = true;

        script.onload = () => {
            const i2yesCounter = window.i2yesCounter;
            if (i2yesCounter) {
                const counterHTML = i2yesCounter.render(counterConfig);
                setCounterHTML(counterHTML);
            }
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            {counterHTML && <div dangerouslySetInnerHTML={{ __html: counterHTML }} />}
        </div>
    );
};

export default Counter;


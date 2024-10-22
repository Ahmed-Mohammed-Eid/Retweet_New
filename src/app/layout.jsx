// app/Layout.jsx
import './globalStyle.scss';

export default function Layout({children}) {
    return (
        // Minimal layout structure
        <html>
        <body>
        {children}
        </body>
        </html>
    );
}

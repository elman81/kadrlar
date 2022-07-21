import "./app-info.css";

const AppInfo = ({employees, increased}) => {
    return (
        <div className="app-info">
            <h1>Apex şirkətinin işçilərinin uçotu </h1>
            <h2>Əməkdaşların ümumi sayı: {employees}</h2>
            <h2>Mükafat alacaqlar: {increased}</h2>
        </div>
    )
}

export default AppInfo;
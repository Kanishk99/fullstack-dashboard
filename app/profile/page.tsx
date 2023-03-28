async function getProfile(){
    const res = await fetch('http://127.0.0.1:8090/api/collections/users/records/');
    const data = await res.json();
    return data?.items as any[];
}

export default async function ProfilePage(){
    return (
        <div>
            <h1>Profile goes here</h1>
        </div>
    )
}
function UserCard({ name, job }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "5px" }}>
            <h3>{name}</h3>
            <p>{job}</p>
        </div>
    );
}

export default function ReuseComponents() {
    return (
        <div>
            <h1>Reusable User Cards</h1>
            <UserCard name="React" job="Frontend" />
            <UserCard name="Next" job="Fullstack + SEO" />
            <UserCard name="NestJs" job="Backend (mostly used for Big Applications)" />
        </div>
    );
}
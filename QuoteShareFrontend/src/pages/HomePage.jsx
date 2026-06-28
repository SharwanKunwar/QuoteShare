import { useState, useEffect } from "react";

const quotes = [
    {
        initials: "AR",
        bg: "#E1F5EE",
        tc: "#085041",
        name: "Anika Rao",
        time: "2h ago",
        tag: "Philosophy",
        quote: "The unexamined life is not worth living.",
        author: "— Socrates",
        likes: 142,
        comments: 18,
        saved: 56,
        liked: false,
    },
    {
        initials: "MK",
        bg: "#EEEDFE",
        tc: "#3C3489",
        name: "Manoj Karki",
        time: "5h ago",
        tag: "Technology",
        quote:
            "Any sufficiently advanced technology is indistinguishable from magic.",
        author: "— Arthur C. Clarke",
        likes: 98,
        comments: 7,
        saved: 34,
        liked: true,
    },
    {
        initials: "PS",
        bg: "#FAEEDA",
        tc: "#633806",
        name: "Priya Sharma",
        time: "Yesterday",
        tag: "Stoicism",
        quote:
            "You have power over your mind — not outside events. Realize this, and you will find strength.",
        author: "— Marcus Aurelius",
        likes: 231,
        comments: 29,
        saved: 112,
        liked: false,
    },
    {
        initials: "RB",
        bg: "#FAECE7",
        tc: "#712B13",
        name: "Rohan Basnet",
        time: "Yesterday",
        tag: "Literature",
        quote: "Not all those who wander are lost.",
        author: "— J.R.R. Tolkien",
        likes: 177,
        comments: 14,
        saved: 88,
        liked: false,
    },
];

const TABS = ["For you", "Following", "Trending", "Collections"];
const TOPICS = [
    "All",
    "Philosophy",
    "Stoicism",
    "Technology",
    "Literature",
    "Leadership",
    "Science",
];

export default function HomePage() {
    const [user, setUser] = useState({
        name: "User",
        email: "",
        picture: "",
    });

    const [feed, setFeed] = useState(quotes);
    const [activeTab, setActiveTab] = useState("For you");
    const [activeTopic, setActiveTopic] = useState("All");
    const [composeText, setComposeText] = useState("");

    // Fetch logged-in user from Spring Boot
    useEffect(() => {
        fetch("http://localhost:8080/api/auth/me", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => setUser(data))
            .catch(() => { });
    }, []);

    const initials = user.name
        ? user.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2)
        : "U";

    const toggleLike = (index) => {
        setFeed((prev) =>
            prev.map((q, i) =>
                i === index
                    ? {
                        ...q,
                        liked: !q.liked,
                        likes: q.liked ? q.likes - 1 : q.likes + 1,
                    }
                    : q
            )
        );
    };

    const toggleSave = (index) => {
        setFeed((prev) =>
            prev.map((q, i) =>
                i === index ? { ...q, saved: q.saved + 1 } : q
            )
        );
    };

    const handlePost = () => {
        if (!composeText.trim()) return;

        const newQuote = {
            initials,
            bg: "#E6F1FB",
            tc: "#0C447C",
            name: user.name,
            time: "Just now",
            tag: activeTopic === "All" ? "General" : activeTopic,
            quote: composeText.trim(),
            author: `— ${user.name}`,
            likes: 0,
            comments: 0,
            saved: 0,
            liked: false,
        };

        setFeed((prev) => [newQuote, ...prev]);
        setComposeText("");
    };

    return (
        <div
            style={{
                fontFamily: "'DM Sans', sans-serif",
                maxWidth: 680,
                margin: "0 auto",
            }}
        >
            {/* Fonts */}
            <link
                href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&family=DM+Sans:wght@400;500&display=swap"
                rel="stylesheet"
            />

            {/* Navbar */}
            <nav
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "1rem 1.25rem",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                <div
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 22,
                        fontWeight: 500,
                    }}
                >
                    Quote
                    <span style={{ color: "#B8860B", fontStyle: "italic" }}>
                        Share
                    </span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <button style={ghostBtn}>🔍</button>
                    <button style={ghostBtn}>🔔</button>

                    {user.picture ? (
                        <img
                            src={user.picture}
                            alt={user.name}
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                border: "1px solid #e5e7eb",
                            }}
                        />
                    ) : (
                        <div
                            style={{
                                width: 34,
                                height: 34,
                                borderRadius: "50%",
                                background: "#FDF6E3",
                                border: "1px solid #e5e7eb",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                fontSize: 12,
                                fontWeight: 500,
                                color: "#854F0B",
                            }}
                        >
                            {initials}
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero */}
            <div
                style={{
                    padding: "2rem 1.25rem 1.5rem",
                    borderBottom: "1px solid #e5e7eb",
                }}
            >
                <div
                    style={{
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                        color: "#B8860B",
                        marginBottom: 6,
                    }}
                >
                    Welcome back, {user.name?.split(" ")[0] || "User"}
                </div>

                <h1
                    style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 30,
                        fontWeight: 500,
                    }}
                >
                    Words that <em style={{ color: "#B8860B" }}>move</em> the world
                </h1>

                <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 20 }}>
                    Discover, share, and collect quotes that resonate.
                </p>

                <div style={{ display: "flex", gap: 8 }}>
                    <button
                        style={primaryBtn}
                        onClick={() =>
                            document.getElementById("compose-input")?.focus()
                        }
                    >
                        Share a quote
                    </button>
                    <button style={outlineBtn}>Explore topics</button>
                </div>
            </div>

            {/* Compose */}
            <div style={composeBox}>
                <div style={avatarSmall}>{initials}</div>

                <textarea
                    id="compose-input"
                    rows={2}
                    value={composeText}
                    onChange={(e) => setComposeText(e.target.value)}
                    placeholder="Share a quote that moved you today…"
                    style={textareaStyle}
                />

                <button onClick={handlePost} style={postBtn}>
                    Post
                </button>
            </div>

            {/* Feed */}
            <div style={{ padding: "0 1.25rem" }}>
                {feed.map((q, i) => (
                    <div key={i} style={feedItem}>
                        <div style={headerRow}>
                            <div
                                style={{
                                    width: 34,
                                    height: 34,
                                    borderRadius: "50%",
                                    background: q.bg,
                                    color: q.tc,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {q.initials}
                            </div>

                            <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 500 }}>{q.name}</div>
                                <div style={{ fontSize: 11, color: "#9ca3af" }}>
                                    {q.time}
                                </div>
                            </div>

                            <span style={tagStyle}>{q.tag}</span>
                        </div>

                        <div style={quoteStyle}>{q.quote}</div>
                        <div style={authorStyle}>{q.author}</div>

                        <div style={{ display: "flex" }}>
                            <button
                                onClick={() => toggleLike(i)}
                                style={{
                                    ...actionBtn,
                                    color: q.liked ? "#D85A30" : "#9ca3af",
                                }}
                            >
                                ♥ {q.likes}
                            </button>

                            <button style={actionBtn}>💬 {q.comments}</button>
                            <button onClick={() => toggleSave(i)} style={actionBtn}>
                                🔖 {q.saved}
                            </button>
                            <button style={actionBtn}>↗ Share</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

/* Styles */
const primaryBtn = {
    fontSize: 13,
    padding: "8px 18px",
    borderRadius: 8,
    border: "none",
    background: "#111827",
    color: "white",
};

const outlineBtn = {
    fontSize: 13,
    padding: "8px 18px",
    borderRadius: 8,
    border: "1px solid #d1d5db",
    background: "transparent",
};

const ghostBtn = {
    fontSize: 16,
    background: "none",
    border: "none",
};

const composeBox = {
    margin: "1rem 1.25rem",
    padding: "1rem",
    border: "1px solid #e5e7eb",
    display: "flex",
    gap: 10,
};

const avatarSmall = {
    width: 32,
    height: 32,
    borderRadius: "50%",
    background: "#FDF6E3",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

const textareaStyle = {
    flex: 1,
    border: "none",
    outline: "none",
    fontStyle: "italic",
};

const postBtn = {
    padding: "6px 14px",
    background: "#111827",
    color: "white",
    border: "none",
};

const feedItem = {
    padding: "1.25rem 0",
    borderBottom: "1px solid #e5e7eb",
};

const headerRow = {
    display: "flex",
    alignItems: "center",
    gap: 10,
};

const tagStyle = {
    fontSize: 10,
    border: "1px solid #e5e7eb",
    padding: "2px 8px",
};

const quoteStyle = {
    fontStyle: "italic",
    paddingLeft: "1rem",
    borderLeft: "2px solid #B8860B",
    marginTop: 10,
};

const authorStyle = {
    fontSize: 12,
    color: "#9ca3af",
    paddingLeft: "1rem",
};

const actionBtn = {
    fontSize: 12,
    background: "none",
    border: "none",
    padding: "5px 10px",
};
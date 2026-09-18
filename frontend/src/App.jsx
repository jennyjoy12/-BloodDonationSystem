import "./App.css";

function App() {
  return (
    <div>

      {/* Navbar */}
      <nav>
        <h2>🩸 Blood Donation</h2>

        <div>
          <a href="#">Home</a>
          <a href="#">Donors</a>
          <a href="#">Blood Banks</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <h1>
          One Donation.
          <br />
          Three Lives. ❤️
        </h1>

        <p>
          Your blood can be someone's second chance.
          Become a lifesaver today.
        </p>

        <button onClick={() => alert("Hello!")}>
          Become a Donor
        </button>

        <button>Request Blood</button>
      </section>

      {/* Cards */}
      <section className="cards">

        <div>
          <h2>🩸 Donor Registration</h2>
          <p>
            Register yourself as a blood donor and help someone in need.
          </p>
        </div>

        <div>
          <h2>🔍 Find Blood</h2>
          <p>
            Search for available blood groups quickly and easily.
          </p>
        </div>

        <div>
          <h2>🏥 Blood Banks</h2>
          <p>
            Find nearby blood banks and donation centers.
          </p>
        </div>

      </section>

      {/* Donor Registration */}
      <section className="registration">

        <h2>🩸 Donor Registration</h2>

        <input type="text" placeholder="Full Name" />

        <input type="email" placeholder="Email" />

        <input type="text" placeholder="Phone Number" />

        <select>
          <option>Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input type="number" placeholder="Age" />

        <input type="text" placeholder="Location" />

        <button onClick={() => alert("Registration Successful! 🩸")}>
          Register as Donor
        </button>

      </section>

      {/* Emergency Blood Request */}
      <section className="emergency">

        <h2>🚨 Need Blood Urgently?</h2>

        <p>
          Submit an emergency blood request and reach potential donors.
        </p>

        <select>
          <option>Select Blood Group</option>
          <option>A+</option>
          <option>A-</option>
          <option>B+</option>
          <option>B-</option>
          <option>O+</option>
          <option>O-</option>
          <option>AB+</option>
          <option>AB-</option>
        </select>

        <input
          type="text"
          placeholder="Location"
        />

        <input
          type="number"
          placeholder="Units Required"
        />

        <button>
          Send Emergency Request
        </button>

      </section>

      {/* Live Blood Status */}
      <section className="blood-status">

        <h2>🩸 Live Blood Status</h2>

        <p className="status-subtitle">
          Current blood availability
        </p>

        <div className="blood-grid">

          <div className="blood-card available">
            <h3>A+</h3>
            <p>8 Units</p>
            <span>🟢 Available</span>
          </div>

          <div className="blood-card available">
            <h3>B+</h3>
            <p>5 Units</p>
            <span>🟢 Available</span>
          </div>

          <div className="blood-card low">
            <h3>O+</h3>
            <p>2 Units</p>
            <span>🟠 Low Stock</span>
          </div>

          <div className="blood-card critical">
            <h3>O−</h3>
            <p>0 Units</p>
            <span>🔴 Critical</span>
          </div>

          <div className="blood-card available">
            <h3>AB+</h3>
            <p>4 Units</p>
            <span>🟢 Available</span>
          </div>

          <div className="blood-card low">
            <h3>A−</h3>
            <p>1 Unit</p>
            <span>🟠 Low Stock</span>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;
import React from "react";

const SignupFormTemplate = ({
  username,
  password,
  role,
  setUsername,
  setPassword,
  setRole,
  handleSignup,
  errorMessage,
}) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">Signup</div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Role:</label>
                  <input
                    type="text"
                    className="form-control"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSignup}
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupFormTemplate;

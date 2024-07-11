import { useState, useEffect, useCallback, FC } from "react";
import { Col, Row, Alert } from "react-bootstrap";

interface NewsletterProps {
  status: 'sending' | 'error' | 'success';
  message?: string;
  onValidated: (data: { EMAIL: string }) => void;
}

export const Newsletter: FC<NewsletterProps> = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = useCallback((e: any) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      onValidated({ EMAIL: email });
    }
  }, [email, onValidated]);

  const clearFields = useCallback(() => {
    setEmail('');
  }, []);

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <label htmlFor="email" className="visually-hidden">Email Address</label>
                <input
                  id="email"
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                  required
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

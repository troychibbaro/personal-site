import React from 'react';
import Card from 'react-bootstrap/Card';

const IconWithText = ({ icon, headerText, bodyText }) => {
  return (
    <Card style={{ width: '18rem', margin: "16px", justifyContent: "center", alignItems: "center", backgroundColor: "var(--ifm-card-fill)", flex: "0 0 auto"}}>
      <div style={styles.iconContainer}>
        {icon}
      </div>
      <div style={styles.textContainer}>
        <h3 style={styles.header}>{headerText}</h3>
        <p style={styles.body}>{bodyText}</p>
      </div>
    </Card>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconContainer: {
    marginRight: '10px',  // Space between icon and text
    resizeMode: 'contain',
    margin: "8px"
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',  // Ensures text is vertically centered
    margin: "8px"
  },
  header: {
    margin: 0,  // Remove default margin
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign:"center"
  },
  body: {
    margin: 0,
    fontSize: '20px',
    textAlign:"center"
  },
};

export default IconWithText;
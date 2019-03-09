import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0,0,0,.125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {
    margin: 'auto',
  },
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    // backgroundColor: 'rgba(0,0,0,.03)',
    borderBottom: '1px solid rgba(0,0,0,.125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(props => <MuiExpansionPanelSummary {...props} />);

ExpansionPanelSummary.muiName = 'ExpansionPanelSummary';

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing.unit * 2,
  },
}))(MuiExpansionPanelDetails);

class FrequentlyAskedQuestions extends React.Component {
  state = {
    expanded: 'panel1',
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };

  render() {
    const { expanded } = this.state;
    return (
      <div>
        <ExpansionPanel
          square
          expanded={expanded === 'panel1'}
          onChange={this.handleChange('panel1')}
        >
          <ExpansionPanelSummary>
            <Typography>What type of driver's license is required?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Zoomcar requires a valid Indian driver's license. It's critical that the license is an original. The License must be for a light motor vehicle (car). Members do NOT need a specific cab license that is associated with a yellow board plate.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
          <ExpansionPanelSummary>
            <Typography>What happens if I return the car late?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            a) Standard hourly fee will be applicable per hour of delay. Weekend or weekday delays will be charged accordingly.
b) Free KMs will be given at 10 km per hour of delay.
c) In addition to the standard hourly fee, every hour of delay would be charged at Rs. 300/hour,
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >
          <ExpansionPanelSummary>
            <Typography>Is there a km limit to how much I can drive?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Each reservation comes with 10 km/hr with a maximum daily driving limit of 240 km/day (24 hour period). For example, a 5 hour reservation would come with 50 km in driving at no additional charge while a 3 day reservation would come with 720 km in driving at no additional charge. There is a per-km charge for each km beyond that point. Please see Zoomcar tariffs for more details.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >
          <ExpansionPanelSummary>
            <Typography>Can I withdraw my Citrus Cash balance into my bank account?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Absolutely! You can withdraw your Citrus Cash balance into your bank account any time. Navigate to the 'My Bookings' page and click on the 'Withdraw' button. You will be redirected to the Citrus Cash page when you can login with your Citrus Cash credentials. There, you can enter your bank account details and withdraw your balance. It can take up to 1 business day for the amount to reflect in your account.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel5'}
          onChange={this.handleChange('panel5')}
        >
          <ExpansionPanelSummary>
            <Typography>Is there a Speed Limit?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Yes, 125 km/hr. You will be charged a overspeeding fine max upto INR 2,500 in case you speed above 125 km/hr. You shall be blacklisted if we find more than two overspeeding cases against you. You will be blacklist if you speed over 150 km/hr.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel6'}
          onChange={this.handleChange('panel6')}
        >
          <ExpansionPanelSummary>
            <Typography>What is damage fee and when does it apply?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Damage fee applies when the member is involved in an incident (including but not limited to a collision or misuse of the vehicle). The Member will be obligated to pay the repair cost up to Rs.10,000 in case of accidental damage. Where the damage is shown to be consequential or otherwise unattributable to accident, the Member will be obligated to bear the full cost of the damage sustained by the vehicle along with miscellaneous expenses. The payment owed will be deducted from the security deposit paid by the customer. In the event the customer is found to violate Zoomcar T&C the maximum cap of the security deposit will not be applicable. For more details please visit the Fee Policy page on our website.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel7'}
          onChange={this.handleChange('panel7')}
        >
          <ExpansionPanelSummary>
            <Typography>Can I opt for a specific type of car?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            No, you can only choose from the 3 car groups Compact, Comfort and SUV as per your need
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel8'}
          onChange={this.handleChange('panel8')}
        >
          <ExpansionPanelSummary>
            <Typography>Can I request delivery and collection at different points?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Once you book you are not allowed to change the address and the pickup and drop point should be same. In case of pickup and drop points are completely apart an inconvenience fee of 2,000 will be applicable
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel9'}
          onChange={this.handleChange('panel9')}
        >
          <ExpansionPanelSummary>
            <Typography>When does the trip Kilometer reading start and end?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            The trip timing will start from the time the driver reaches the desired location.Start Kms will be filled when you start the trip and end Kms when the trip ends. In case driver is late,liberty will be given in trip start and end timings
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

        <ExpansionPanel
          square
          expanded={expanded === 'panel10'}
          onChange={this.handleChange('panel10')}
        >
          <ExpansionPanelSummary>
            <Typography>Do I need to provide any ID proof before taking the car?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
            Yes, you will have to produce a government verified original ID proof to our driver,he can take a pic of it in case needed
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default FrequentlyAskedQuestions;


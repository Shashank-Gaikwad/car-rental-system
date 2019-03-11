import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab: {
      backgroundColor:'white'
  },
  linktab: {
      color: 'black'
  }
});

class Policies extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static">
            <Tabs variant="fullWidth" className={classes.tab} value={value} onChange={this.handleChange}>
              <LinkTab className={classes.linktab} label="FEE POLICY" href="page1" />
              <LinkTab className={classes.linktab} label="ELIGIBILITY" href="page2" />
              <LinkTab className={classes.linktab} label="PRIVACY POLICY" href="page4" />
              <LinkTab className={classes.linktab} label="INTER STATE TRAVEL" href="page5" />
            </Tabs>
          </AppBar>
          {
            value === 0 && <TabContainer>
                <h1>FEE POLICY</h1>
            </TabContainer>
        }
        {
            value === 1 && <TabContainer>
                <h1>ELIGIBILITY</h1>
                THIS WEBSITE TERMS OF USE ("MEMBER AGREEMENT") IS AN ELECTRONIC RECORD IN THE FORM OF AN ELECTRONIC CONTRACT FORMED UNDER INFORMATION TECHNOLOGY ACT, 2000 AND RULES MADE THEREUNDER AND THE AMENDED PROVISIONS PERTAINING TO ELECTRONIC DOCUMENTS / RECORDS IN VARIOUS STATUTES AS AMENDED BY THE INFORMATION TECHNOLOGY ACT, 2000. THIS MEMBER AGREEMENT DOES NOT REQUIRE ANY PHYSICAL, ELECTRONIC OR DIGITAL SIGNATURE. 

THIS MEMBER AGREEMENT IS A LEGALLY BINDING DOCUMENT BETWEEN USER AND ZOOMCAR (BOTH TERMS DEFINED BELOW). THIS MEMBER AGREEMENT WILL BE EFFECTIVE UPON YOUR ACCEPTANCE OF THE SAME (DIRECTLY OR INDIRECTLY IN ELECTRONIC FORM OR BY MEANS OF AN ELECTRONIC RECORD) AND WILL GOVERN THE RELATIONSHIP AND TRANSACTION BETWEEN USER AND ZOOMCAR FOR THE USE OF THE SERVICES OFFERED THROUGH WEBSITE (DEFINED BELOW). 

This Member Agreement on the website www.zoomcar.com and mobile application under the name and style of "Zoomcar" (the Website) is between Zoomcar India Private Limited (hereinafter referred to as "Zoomcar" or “Company” or "We" or "Us" or "Our") and the guest users or registered users of the Website (hereinafter referred to as “Member” or "You" or "Your" or "Yourself" or "User") describe the terms on which Zoomcar offers You the access to the Website and such other services as are incidental and ancillary thereto ("Services").  

PLEASE READ THE TERMS OF MEMBER AGREEMENT CAREFULLY BEFORE USING OR REGISTERING ON THE WEBSITE OR ACCESSING ANY MATERIAL, INFORMATION OR AVAILING SERVICES THROUGH THE WEBSITE. IF YOU DO NOT AGREE WITH THESE TERMS, PLEASE DO NOT USE THE WEBSITE OR AVAIL ANY SERVICES BEING OFFERED THROUGH THE WEBSITE. 

ZOOMCAR RESERVES THE RIGHT TO CHANGE THE TERMS OF THIS MEMBER AGREEMENT FROM TIME TO TIME AND SHALL GIVE NOTICE OF SUCH CHANGES TO THE MEMBER IN A TIMELY MANNER. NOTICE TO THE MEMBERS SHALL BE CONSIDERED GIVEN WHEN SUCH NOTICE IS INDICATED AND ACCESSIBLE FROM THE FIRST PAGE ACCESSED AFTER THE MEMBER LOG-ON TO ZOOMCAR WEBSITE, BY EMAIL TO THE MEMBER’S EMAIL ADDRESS PROVIDED TO ZOOMCAR IN THE MEMBER’S ACCOUNT CREATION OR MOST RECENTLY PROVIDED TO ZOOMCAR, OR BY SMS TO THE MEMBER’S MOBILE NUMBER PROVIDED DURING THE ACCOUNT CREATION. MEMBER AGREES THAT THE AMENDED TERMS AND CONDITIONS OF THIS AGREEMENT SHALL BE EFFECTIVE AND BINDING THE EARLIER OF (1) THE EFFECTIVE DATE INDICATED IN SUCH NOTICE; OR (2) ON THE DATE POSTED ON ZOOMCAR’S WEBSITE. 

IT WILL BE PRESUMED THAT MEMBER HAS RECEIVED ANY SUCH NOTICE IF AND WHEN MEMBER MAKES A RESERVATION FOR A ZOOMCAR VEHICLE AFTER NOTICE OF A CHANGE TO THIS AGREEMENT HAS BEEN PLACED ON ZOOMCAR WEBSITE AND/OR DISTRIBUTED TO MEMBER BY EMAIL OR SMS. BY MAKING A RESERVATION AFTER RECEIVING NOTICE OF ANY CHANGES TO THE AGREEMENT, MEMBER ASSENTS TO AND WILL BE BOUND BY SUCH CHANGES TO THE AGREEMENT. MEMBER MAY DECLINE SUCH CHANGES BY DISCONTINUING TRIPS UNDER ZOOMCAR’S MEMBER AGREEMENT. 

IN THE EVENT OF ANY CONFLICT BETWEEN THIS AGREEMENT AND ANY OTHER DOCUMENT WITH RESPECT TO ZOOMCAR’S OTHER PROGRAMMES, THESE TERMS AND CONDITIONS SHALL GOVERN EXCEPT OTHERWISE SET FORTH FROM ZOOMCAR IN WRITING. 

<h1>1. General:</h1>

Zoomcar India Private Limited is a company incorporated under the laws of India, with its registered office at Unit Nos. 701 to 717, 7th Floor, Tower-B, Diamond District, No. 150, Airport Road, Kodihalli, Bangalore – 560008, India and having CIN: U63090KA2012FTC065834.

<h1>2. Persons Permitted to Drive Vehicles:</h1>

2.1 Only active Zoomcar Member in good standing, as decided solely by Zoomcar, is allowed to drive Zoomcar vehicles. Non-Member is expressly prohibited from driving a Zoomcar vehicle at any time. Member holding effective driving license, uploaded on the Website and approved by Zoomcar, may drive a Zoomcar vehicle that has been reserved by another Zoomcar Member with the permission of the Member having carried out the reservation; however, all fees and charges shall be determined in accordance with, and be the responsibility of, the reserving Member while any liability and/or claim arising out of such usage shall be that of all such participant Members. Notwithstanding, anything contrary contained in this Member Agreement, the Member booking the ride must ensure that any other person having effective driving license drives Zoomcar vehicle only with the prior consent of Zoomcar, failing which Member originally booking the vehicle shall be solely liable to indemnify Zoomcar without any limitation for any loss suffered by Zoomcar.

2.2 Satisfying eligibility criteria required to become a Zoomcar Member does not automatically give an applicant the right to become a Zoomcar Member. Acceptance of the applicant’s membership is subject to approval by Zoomcar at its sole discretion.

2.3 Should any Member’s driving license expire or be revoked, authorization to drive Zoomcar vehicles shall expire immediately. Zoomcar shall be notified of such expiry or revocation by the Member by e-mail forthwith upon such expiry or revocation.

2.4 By applying for membership, each applicant authorizes Zoomcar and Zoomcar reserves the right on its sole discretion to obtain his/her driving records from the jurisdiction in which the applicant is licensed. Because driving a Zoomcar vehicle requires maintaining a good driving record, Zoomcar may periodically check Member’s driving records and reserves the right, at its sole discretion, to suspend or terminate the Membership of any Member, who does not meet Zoomcar’s driving eligibility requirements. Member agrees to promptly report to Zoomcar any suspension or revocation of his/her driving license, or any tickets/citations/conviction related to any traffic violation including but not limited to driving under the influence of drugs or alcohol, driving while intoxicated, reckless driving, exceeding the speed limit, or sending an SMS while driving.

2.5 Member is responsible for providing and maintaining current e-mail, cell phone, residential address (current/temporary and permanent), and other account information with Zoomcar. Member further warrants that information provided to Zoomcar shall be absolutely correct and is bound to inform to Zoomcar promptly, if any change occurs in the information provided earlier including but not limited to residential address.

2.6 Member is responsible for keeping any Zoomcar related password and/or PIN numbers in strict confidence and to not make passwords or PINs available to third-parties, should a PIN or password be reduced to written or electronic form, the Member will be responsible for any associated costs and/or damages in connection with unauthorized use by third-parties. If a Member has reason to believe a third-party may have obtained unauthorized knowledge of a password and/or PIN, Member agrees to change the compromised password and/or PIN instantly.

<h1>3. Prohibited Uses:</h1>

3.1 The use of a Zoomcar vehicle under the following conditions is prohibited:

a) any speed race or competition;

b) for the purpose of towing, pushing, or propelling any trailer or any other vehicle;

c) for the primary business purpose of transporting people or operating a taxi service;

d) by any person who is under the influence of (i) alcohol or (ii) any drug or medication under the effects of which the operation of a vehicle is prohibited or not recommended. A zero-tolerance policy is adopted and a limit of 0.0% applies;

e) in the carrying out of any crime or any other illegal activity;

f) in an imprudent, negligent, or abusive manner or for any abnormal use of this vehicle;

g) by any person who has provided Zoomcar with false information or whose representations are determined to be false (including, without limitation, regarding his name, age, or address);

h) driving a Zoomcar vehicle outside of India or any prohibited areas within India;

i) driving while using a mobile phone or any other mobile communication device in any manner whatsoever, including while sending an SMS, emailing, using a cell phone with or without a hands-free device, otherwise using a mobile communication device that may distract you from driving or otherwise engaging in similar activities that may be prohibited by applicable law;

j) Using Zoomcar vehicle to transport flammable, poisonous, or otherwise hazardous substances for other than legally permissible household use or in amounts greater than what is usually consumed in a household.

k) Transporting objects with Zoomcar vehicle that could – due to their size, shape, or weight adversely impact the vehicle’s handling safety or that could damage the interior of Zoomcar vehicle or, by virtue of such object/s protruding outside, affect the safety of vehicles driving in the vicinity of Zoomcar vehicle.

l) Transporting more passengers than the prescribed seating capacity of the vehicle by manufacturer of the vehicle.

3.2 The foregoing examples are not intended to be an exhaustive list. Any unreasonable, unwarranted, illegal, unethical or inappropriate use of a Zoomcar vehicle except the personal use for travel, as determined by Zoomcar in its sole discretion, may be deemed a violation of these terms and conditions. Zoomcar may report to the authorities any use of a Zoomcar vehicle or other activities that are in violation of local, state, and/or national law or in violation of these terms and conditions.

3.3 Zoomcar may immediately suspend or terminate the use of its Service by any Member for a violation of any of the terms and conditions of Member Agreement. Upon suspension or termination, any existing reservations for the Member may be cancelled by Zoomcar at its sole discretion. In addition, Member will be absolutely responsible for any and all, losses, damages (direct/indirect), costs, charges, fees and expenses incurred by Zoomcar, as a result of a breach of any of these terms and conditions and Member unconditionally and irrevocably agrees that Zoomcar reserves the right to pursue the remedial action to recover the losses/damages suffered by Zoomcar from Member’s property including but not limited to his/her legal heirs/representative’s properties.

<h1>4. Reserving Zoomcar Vehicles:</h1>

4.1 Reservation is required for all potential booking. Member must always reserve a vehicle in advance of use and will be billed for usage fees at the time of reservation. Member is required to fulfil the below mentioned conditions at the time of taking the possession of the Vehicle for scheduled ride/trip:

a) Member must carry the original driving licence, which is being shared with Zoomcar at the time of opening of account/booking of the ride with Zoomcar. Member must show the same to the representative of Zoomcar available at location, where the possession of the Vehicle is supposed to be taken by Member;

b) Member must carry and support Zoomcar in capturing the image of any one out of following documents in original, as an additional document to be placed on records of Zoomcar to justify his/her identity:

i) EPIC (Electoral Photo Identity Card), commonly known as Voter ID; or

ii) Valid Passport

c) Member must co-operate with the representative of Zoomcar in taking a photo of Vehicle along with Member, which is meant for safety of Member and record purposes of Zoomcar.

Member shall be held solely responsible, if any of the above conditions are not being completed successfully at the time when possession of vehicle was supposed to be taken by Member and Zoomcar reserves the right not to handover the possession of Vehicle. Consequently, the booking will stand completed without any further onus of Zoomcar to refund or return the booking amount.

4.2 If You wish to cancel a reservation or shorten the period for which a vehicle has been reserved, You must do so in advance, in pursuance of the Fee Policy.

4.3 If You wish to extend a reservation, You may do so only if following conditions are fulfilled:

a) the online payment for the extension has been made and successfully receipt by Zoomcar; and

b) the Vehicle is available for use for the extension period (for example, it is not reserved by another Member); and 

c) the request to extend is completed prior to the scheduled expiration time of Your existing reservation.

In case, any of the above conditions are missing after the expiry of the booking (initial or immediate prior) then You will be deemed to possess the vehicle without authorisation and must hand over the Vehicle to Zoomcar’s parking or its representative without fail/ delay. A delay beyond one hour from the expected handover time of vehicle or after the expiry of booking as the case may be, will be making You the guilty of breach of trust and Your involvement in theft of Vehicle would be presumed without any doubt.

4.4 In the event Your reservation is not extended successfully (even if You have put in a request for extending the reservation but which has not been confirmed or has been denied by Zoomcar for any reason) and You do not return the car to the correct and designated Zoomcar space by the end time of Your reservation, Zoomcar reserves the right to initiate the criminal proceedings against You and simultaneously will make all reasonable efforts to take possession of the vehicle from You immediately or any time thereafter, and at any location

For the avoidance of doubt,

a) You will be charged late fee, inconvenience fee and any other charges applicable as per Our Fee Policy from the scheduled end time of Your booking till the time the vehicle is actually recovered by Zoomcar,

b) You will be charged any additional costs viz; legal attorney fees, consultants fees, travel costs, etc. incurred by Zoomcar in taking possession of the vehicle from You, and

c) You will not be provided any compensation or alternate means of transportation in such case and will not have the right to ride in Zoomcar vehicle any more.You shall hold Zoomcar, its officers, employees, agents and affiliates harmless against any claim in connection with the vehicle and/or its re-possession and shall irrevocably and unconditionally indemnify Zoomcar against any cost, loss or liability suffered by Zoomcar arising out of or in connection with any claim made by a third party against Zoomcar in relation to the vehicle and/or its re-possession.

<h1>5. Vehicle Pick-Up and Return/Vehicle Condition/Stolen Vehicles:</h1>

5.1 You must pick up the selected vehicle at its designated Zoomcar parking space and return it secured, clean, and in good working order, to the correct and designated Zoomcar space by no later than the end time of Your reservation. However, the handover of vehicle pursuant to your booking is subject to the the availability of vehicle. Further, Zoomcar reserves the right to cancel any booking at its sole discretion with only consequence to return the fees collected at the time of creation of booking.

5.2 Prior to taking possession of a vehicle, You must do an exterior walk-around and an interior look-over. Before driving the vehicle, You must advise Zoomcar of any damage or abnormality encountered on the vehicle or in the operation of the vehicle. If Zoomcar is not notified of a problem at the start of a reservation, You will be deemed to be responsible for any problem with the vehicle discovered or reported after Your reservation, including, without limitation, damage to the vehicle or lack of cleanliness. You may be charged a damage fee, a cleaning fee, or other applicable fees, and Zoomcar may suspend, or may even terminate Your membership.

5.3 You must leave all the original documents including but not limited to registration certificate, insurance policy, tax payment challans, self-drive licenses, pollution clearance certificates, vehicle’s key, key fob, or other starting device to the vehicle in its designated position in the vehicle at the conclusion of Your reservation. You must advise Zoomcar immediately if You fail to leave the original documents mentioned hereinabove, key/fob/starting device, parking pass, or toll payment pass (if applicable in the vehicle.) and this causes inconvenience to Zoomcar or another Member, You will be charged the hourly rate for the vehicle until the, original documents, key/key fob/starting device/parking pass/toll payment pass is returned safely to Zoomcar and You will remain responsible for the payment of charges against the usage of the vehicle during such period. You may also be charged a fee at Zoomcar’s sole discretion to replace any of the items missing from the vehicle.

5.4 The end of the trip is being confirmed by either a) specific completion of closing checklist at the end of trip; or b) an SMS message to Zoomcar’s provided number to notify of such intent; or c) by unwarranted breakdown/accident of the vehicle.

5.5 Reserving Member is responsible for all charges and costs incurred related to Zoomcar vehicle for the entire period of the reservation and until the vehicle is returned, secured, closed, locked and serviceable (all accessories off, key out of ignition and in proper place, all windows, doors, hatches, sunroofs and other openings closed, toll payment pass and parking pass and other accessories in the vehicle) to its designated location. Zoomcar vehicles must be returned no later than the end time of the reservation and the Member scheduled trip/ride comes to an end automatically and will be governed as per the provisions of clause 4.3 above if extension is sought.

5.6 Member is required to report to Zoomcar immediately any condition that impairs the driving functionality of the vehicle, such as poor driving feel or external or internal damage that renders the vehicle unsafe, including but not limited to, missing or inoperable signal or driving lighting, broken or missing rear-view mirrors and windshield glass.

5.7 Notwithstanding anything contrary contained under this policy, any damage caused to vehicle/Zoomcar because of Your wilful misconduct or gross negligence, during such time when the vehicle is not in motion, will attract charges/fees as per the sole discretion of Zoomcar.

5.8 Stolen vehicles or any accidental incidences must be immediately reported to Zoomcar and the nearest police station with a detailed written complaint based on actual facts. Member shall ensure that such complaint shall not contain any discrepancy, inconsistencies or distortions from actual facts as the same would be detrimental to a valid insurance or other claim by Zoomcar. The Member will be solely liable without any demur, for any loss due to a discrepant, inconsistent or distorted complaint or information by the Member.

<h1>6. Safety:</h1>

6.1 Seat Belts and Child Restraints - Member is responsible for:

a. Complying with all applicable seat belt, speed limit and child restraint laws. It is being made crystal clear that Member must abide themselves with the maximum speed/ weight limit and any other instructions being displayed/ communicated by the authorities through marks or sign boards in various locations of the concurrent trip

b. Protecting all children by properly using any child passenger restraint system that complies with the Motor Vehicle Safety Standards in the jurisdiction where the trip is initiated and where Zoomcar vehicle is driven during such trip.

<h1>7. Securing Zoomcar Vehicles:</h1>

7.1 Each time Member parks a Zoomcar Vehicle (either at the end of the reservation or during the reservation period), the Member is responsible for securing the vehicle from external factors including human or general known adverse weather conditions.

a. Windows must be closed and the central locking system must be enabled using the smart phone app or the SMS command). If the car is outside of cell phone range, and the car cannot be locked through the phone command system, the User must remove the key and lock the car manually. Member will be responsible for any fees or charges associated with a failure to perform these steps.

7.2 Zoomcar encourages all its Members to take full responsibility of their belongings. In case of any Member claims to have left back any luggage or any phones or personal music devices inadvertently in Zoomcar vehicle after the Member completes his/her reservation, Zoomcar shall endeavour to locate the lost belongings on a "best-effort" basis provided the Member notifies Zoomcar of the same within 90 (Ninety) minutes of the successful return of the car post completion/termination of the reservation, but Zoomcar shall not be held responsible for such loss or damage in any circumstances.

<h1>8. Fees And Eligible (Reimbursable) Expenses:</h1>

8.1 Member is subject to Zoomcar’s fees policy being mentioned on the website www.zoomcar.com It entails the scenarios which covers all the fees including but not limited to rentals, excess kilometre driving charges, late fees, late charges, extensions fees, penalties or fines, if any etc.

8.2 An "Eligible Expense" is defined as;

(a) any fuel related expense, provided it reconciles reasonably with distance travelled; in pursuance of the standard industry mileage or Zoomcar’s internal mileage standard; or

(b) an expense incurred by the Member for minor (under INR 1000) routine maintenance on Zoomcar vehicles, such as new wiper blades, light bulbs, or windshield-washer fluid, etc. or (c) any expense in excess of INR 1000 that is authorized in advance by a Zoomcar Representative, via e-mail/sms/phone. If a Member pays for an eligible expense, he or she must keep the invoice which is subject to fuel test more particularly mentioned in the Fee Policy, which conspicuously captures the date and time showing that it was incurred during the reservation period. The Member must print his or her name on the receipt and give a physical original hard copy of the receipt to Zoomcar vehicle attendant after his/her reservation. Zoomcar will reimburse the Member or credit the Member's account, post the verification of claim and corresponding invoices. No reimbursement or credit will be given without an invoice, or if the invoice is submitted later than 3(Three) days from the reservation date.

<h1>9. Supermiler Club and Loyalty Points:</h1>

9.1) Z points will be credited after the completion of a booking. Completion is defined as successful handover of vehicle back to Zoomcar after filling End checklist and payment of all due owed by the Customer

9.2) Z-points will not be credited in case of cancellation of booking done by either the user or Zoomcar

9.3) Z-points will not be awarded for Excess KM Driven

9.4) Z-points will not change in case of Upgrade / Downgrade of vehicle. Points calculation will be based on originally booked cargroup

9.5) Rescheduled Bookings with Extended Booked KMs would be considered for Z-points calculation

9.6) Z-Point will be credited to members within 7(seven) working days after the successful completion of end checklist by the member

9.7) The Program will be valid for bookings made through the website www.zoomcar.com or its mobile app

9.8) Z-points will be used on first in first out basis

9.9) Z-points shall be credited to the same account through *which* the booking is made

9.10) Z-points are non-transferable, non-binding and non-encashable

9.11) Z-points cannot be utilized against any outstanding amount/charges for previous bookings

9.12) Zoomcar reserves the right to cancel all or partial Z-points granted to the members or change any of the terms and conditions including but not limited to eligibility, redemption rewards, Z-points etc., of this Program, at any point in time without prior notice

9.13) Zoomcar also reserves the right to disqualify any member at any point in time at its sole discretion

9.14) Any modification in the Program or any *of* its terms and conditions shall be deemed to have been accepted by the member by continuing to use the Zoomcar website or mobile application

9.15) Zoomcar also reserves the right to terminate or suspend the Program, temporarily or permanently, at any point in time, at its sole discretion

9.16) Zoomcar shall not be liable for any unauthorized use of member's account and the member shall be solely responsible to ensure security and confidentiality of member's account

9.17) Z-Points will not be awarded if the Customer uses the Vehicle for any purpose which is prohibited in the membership agreement or is involved in any traffic violations. 
Zoomcar reserves the right to run any offer/program to provided additional benefits through this Program to a set of identified users based on certain parameter as may be decided by Zoomcar from time to time. And such program/offer shall consider only prospective completed booking i.e. bookings made from the date of the launch of such program/offer.

9.18) In case of any dispute or conflict Zoomcar's decision shall be final

<h1>10. Maintenance/Cleanliness:</h1>

10.1 Zoomcar will perform all necessary and required routine maintenance on all of its vehicles. However, Member is responsible for the cleanliness of vehicle and are expected to assist in helping Zoomcar to maintain the driving safety and performance of the vehicle, in particular during longer reservations or when the vehicle indicates that service or maintenance is required.

10.2 Vehicle may require Roadside Assistance from time to time. Zoomcar makes reasonable best efforts to provide Roadside Assistance support in all cases. If, however, a Member's need for Roadside Assistance results from a breach of these Terms and Conditions, the Member may be charged for the full costs of the towing, repair & maintenance.

10.3 Use of tobacco, cigarettes, cigars, and alcohol is absolutely prohibited inside Zoomcar vehicles. Member is subject to additional fine if evidence of smoking, chewing, drinking or dipping is found inside Zoomcar vehicles or complained of by a Member using the vehicle immediately following the Member’s reservation.

10.4 Burning any substance is absolutely prohibited in Zoomcar vehicles. This includes, but is not limited to tobacco, other drugs, and incense.

10.5 Pets are absolutely prohibited in Zoomcar vehicles, except for those vehicles designated “pet friendly”. Member is subject to additional fees, if evidence of pets is found in Zoomcar vehicles or complained of by a Member using the vehicle immediately following the Member’s reservation.

<h1>11. Breakdown or Incidents:</h1>

11.1 All breakdowns or incidents involving Zoomcar vehicles must be reported to Zoomcar immediately by phone to 080-67481200 and via email on support@zoomcar.com

11.2 Breakdown and Roadside Assistance. While using a vehicle, You must follow the owner's manual instructions, provided in the vehicle’s glove compartment. If a problem arises that prevents or limits the use of the vehicle or that may compromise people's safety, Member must immediately notify Zoomcar on the above mentioned phone number/email id and follow Zoomcar’s instructions. Member may have to pay for towing, repairs, and other expenses in some circumstances.

11.3 Jump start. If You perform a jump start to Zoomcar vehicle, You must inform Zoomcar immediately by phone or through the mobile app). You are fully responsible for any damage that may result from the improper use of jumper cables or other tools. It is strictly forbidden to provide a jump start to any vehicle other than a Zoomcar vehicle.

11.4 Incident. In case of an incident involving property damage or any third party, the Member must fill out an official police report form and, mandatorily provide a jointly agreed-upon statement, complete Zoomcar’s incident report form, and obtain the following information:

a. Date, time, and place of incident;

b. The license plate numbers of any other vehicles involved, their make and year, their identification number (serial number), and the insurance certificate's number (with name, address and phone number of the insurance agent);

c. The names, addresses, and driver's license numbers of the persons involved in the incident;

d. The name, address, and driver's license number of the owner of the vehicle (if he or she is not the driver);

e. The name, addresses, and phone number of witnesses, passengers, and any other involved persons;

f. Circumstances of the incident describing immediate surrounding environment and car position prior to the incident; and

g. A police report is required regardless of liability or fault. Member shall specify in his/her detailed written complaint to the police the actual facts only. Member shall ensure that such complaint shall not contain any discrepancy, inconsistencies or distortions from actual facts as the same would be detrimental to a valid insurance or other claim by Zoomcar. Any loss occasioned to Zoomcar due to a discrepant, inconsistent or distorted complaint by a Member shall be to the account of such Member.

11.5 Investigation and procedure. Member must provide to Zoomcar and any other claims adjustment service with the findings of any report or any notice relating to a claim or a lawsuit against Zoomcar regarding any incident involving a Zoomcar vehicle. Member agree to cooperate fully with Zoomcar in the investigation and defense of any such claim or lawsuit. A Member's accounts will be suspended until the investigation has been concluded.

11.6 The Member shall be responsible for the costs related to the repair, recovery, and loss of use of any Zoomcar vehicle resulting from any of the foregoing, up to the current damage fee, as set forth in the Fee Policy / Rate Schedule (if such costs are because of the fault of the Member or if the fault is not directly established to any other person/ entity, or where any cost is not paid / reimbursed by the insurer of Zoomcar vehicles or the insurer of the other vehicle involved in the accident).

11.6A Where the Member is not responsible for the breakdown of the Zoomcar vehicle, Zoomcar shall refund an amount equal to the cost of the unused hours of such booking. Further, Zoomcar shall not be liable for any further costs borne by the Member as a consequence of the breakdown of the Zoomcar vehicle.

11.7 In case of any accidents/damages, any out of court settlement initiated or accomplished by Members with the third parties without written consent of Zoomcar will be solely borne by the Member.

<h1>12. Traffic Violations:</h1>

12.1 You are responsible for any traffic violations incurred due to Your inappropriate use of a Zoomcar vehicle. This includes, but is not limited to: unauthorised parking, excess speeding, breaking red light, photo enforcement, and toll violations. You are solely liable for all costs imposed due to any such violation during the concurrence of Your trip/ride/booking, including fines for late payment and any processing fees added by the respective regulatory authority. You are liable for payment of all tolls and any fines for toll evasion. You must report such violations to a Zoomcar representative, as soon as possible, within the prescribed timeline for the violation (for example, if the case is being taken to court). Zoomcar will notify the Member immediately by e-mail after it comes to know about any of such violation and Member shall forthwith pay the relevant fine/s to the authority concerned and provide Zoomcar with the proof of such payment, failing which Zoomcar will pay those amounts and Member shall reimburse the same to Zoomcar at earliest. However, where Member has personal knowledge of such violations, Zoomcar will not be obligated to provide Member with the notification as above, but Member’s obligation to pay the relevant fine/s and notifying Zoomcar of such compliance will continue as aforementioned.

12.2 You must notify Zoomcar of any traffic violation notices found on a vehicle at the time of vehicle pick up.

12.3 You must not leave a vehicle in a zone which has parking restrictions. If You leave the vehicle in such a restricted zone, You must immediately notify Zoomcar, and You will be responsible for any and all violation notices or towing charges incurred by Zoomcar. Additionally, financial penalties will be levied against You for any inconvenience caused to other Zoomcar member if the vehicle is unavailable for its scheduled reservation because of such parking violations as set out in the fee policy on the website i.e. www.zoomcar.com

<h1>13. Insurance and Liability:</h1>

13.1 MEMBER DEDUCTIBLE OBLIGATION:

A. IF MEMBER IS IN FULL COMPLIANCE WITH THE TERMS AND CONDITIONS OF ZOOMCAR’S POLICIES BEING MENTIONED AT WWW.ZOOMCAR.COM, ZOOMCAR SHALL PROVIDE PRIMARY THIRD PARTY LIABILITY PROTECTION, WHICH WILL BE TO THE EXTENT OF CLAIMS / LIABILITIES COVERED BY ZOOMCAR’S VEHICLE INSURER, ON ZOOMCAR’S VEHICLES FOR ANY/ ALL CLAIMS AND/OR LIABILITIES ARISING DURING THE USE OR OPERATION OF THE VEHICLE BY THE MEMBER. MEMBER WILL BE RESPONSIBLE FOR ANY ASSOCIATED DEDUCTIBLE CHARGES DIRECTLY/INDIRECTLY PERSONALLY ATTRIBUTABLE TO THE MEMBER’S DEFAULT OR OTHERWISE AS PER DISCRETION OF ZOOMCAR.

B. IF AT ANY TIME IT IS DETERMINED THAT LOSSES/CLAIMS MENTIONED HEREINABOVE WILL EXCEED THE INSURANCE COVERAGE TAKEN BY ZOOMCAR, MEMBER WILL BE RESPONSIBLE FOR ANY SUCH EXCESS CLAIMS/ LOSS/ DAMAGES.

13.2 ZOOMCAR IS NOT RESPONSIBLE FOR ANY DAMAGE TO, LOSS OR THEFT OF, ANY PERSONAL PROPERTY BELONGING TO MEMBER OR CO-PASSENGER OR THIRD-PARTIES, REGARDLESS OF FAULT OR NEGLIGENCE.

13.3 LIABILITY PROTECTION APPLIES ONLY TO CLAIMS OF THIRD-PARTY BODILY INJURY, DEATH OR PROPERTY DAMAGE, OTHER THAN TO THE VEHICLE, ARISING FROM THE USE OF ZOOMCAR VEHICLE AS PERMITTED BY THIS AGREEMENT AND APPLICABLE LAW. ANY SUCH PROTECTION EXCLUDES ANY CLAIM MADE BY MEMBER OR CO-PASSANGER OR MEMBER’S/CO-PASSANGER’S IMMEDIATE FAMILY MEMBERS WHO PERMANENTLY LIVE WITH MEMBER OR IS TRAVELLING WITH MEMBER AT THE TIME OF INCIDENT. THIS OBLIGATION MAY BE LIMITED TO THE EXTENT ZOOMCAR’S COVERAGE APPLIES. ZOOMCAR SHALL NOT BE LIABLE TO MEMBER/CO-PASSANGER FOR ANY INDIRECT, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES (INCLUDING LOST PROFITS) ARISING FROM OR RELATED TO ZOOMCAR VEHICLE, ITS USE, OR THIS AGREEMENT.

13.4 MEMBER INCLUDING BUT NOT LIMITED TO HIS/HER PROPERTIES, LEGAL HEIRS ETC; (IN CASE OF HIS/HER ABSENCE) INDEMNIFIES AND HOLDS ZOOMCAR, ITS PARENT COMPANY AND AFFILIATES AND HIS/HER RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, SHAREHOLDERS, AGENTS, ATTORNEYS, ASSIGNS AND SUCCESSORS-IN-INTEREST, HARMLESS WITHOUT DEMUR FOR ALL LOSSES, LIABILITIES, DAMAGES, INJURIES, CLAIMS, DEMANDS, COSTS, ATTORNEY FEES, BUSINESS LOSS AND OTHER EXPENSES INCURRED BY ZOOMCAR (A “LOSS”) ARISING FROM: (1) THE USE OR POSSESSION OF ZOOMCAR VEHICLE BY THE MEMBER AND (2) THE MEMBER’S NON-COMPLIANCE WITH THIS AGREEMENT.

13.5 MEMBER INCLUDING BUT NOT LIMITED TO HIS/HER LEGAL HEIRS/ REPRSENTATIVES/ GAURDIANS SHALL HAVE FINAL RESPONSIBILITY TO ZOOMCAR FOR ALL SUCH LOSSES.

13.6 This Agreement is intended for the benefit of Member and Zoomcar and no other party may claim rights hereunder, whether as a third-party beneficiary or otherwise. UNDER NO CIRCUMSTANCES WILL ZOOMCAR BE LIABLE TO ANY THIRD-PARTY FOR INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM OR RELATED TO THIS AGREEMENT OR USE OF ZOOMCAR VEHICLES AND AVAILING OF SERVICE BY MEMBER.

<h1>14. Data Protection:</h1>

14.1 Zoomcar captures, stores, processes and uses the Member’s Personal data, including, but not limited to, name, e-mail id, internet protocol address, copy of driving license image and duly attested colour image of Voter ID or Passport on the letter head of the electoral officer and police officer respectively under whose jurisdiction the address falls), and any other additional address cum identity proof, image of the customer, the usage and vehicle data as they relate to the Member, to the extent this is necessary for the administration and implementation of this Agreement and the Member’s use of Zoomcar’s vehicle.

14.2 Should third-party services be used, Zoomcar is entitled to forward to the third-party service provider the Member’s Personal data, to the extent this is required in order to fulfil the objectives of Zoomcar.

14.3 Zoomcar is entitled to provide Member’s Personal data to third-parties for the purposes of providing individualized offers, Services, and other customized information to Members.

14.4 Zoomcar shall implement and maintain reasonable procedures for protecting sensitive personal information in compliance with applicable law.

14.5 Zoomcar shall be entitled to disclose information of the Member to Zoomcar’s parent company and to all companies controlled by Zoomcar or any of its affiliates and to any government body as required by the law/ or by directive/ or request from any government body or to any third party deemed fit and proper by Zoomcar, in its absolute discretion.

14.6 Notwithstanding anything contrary contained herein, Member shall be governed by the privacy policy of Zoomcar being mentioned on the website www.zoomcar.com.

<h1>15. Arbitration & Jurisdiction for Disputes:</h1>

15.1 Any Dispute, controversy or claims by or between, Zoomcar and Member, hereto arising out of or relating to or in connection with terms and conditions of this Member Agreement or transactions contemplated on Website, or the breach, termination, validity of any term under this agreement shall be finally settled by ‘Arbitration’ in accordance with the Indian Arbitration and Conciliation Act, 1996. There shall be a sole arbitrator, who shall be appointed by Zoomcar. Any arbitration proceedings or award rendered hereunder and the validity, effect and interpretation of this agreement to arbitrate shall be governed by the Laws of India. The arbitration proceedings shall be conducted in Bangalore or Jaipur, and the award shall be rendered in the English Language. If either party employs attorneys to enforce any rights arising out of or relating to this Agreement, the prevailing party shall be entitled to recover reasonable attorneys’ fees.

15.2 (a) Subject to sub-clause (b) the Member irrevocably agree that the courts in Bangalore are to have exclusive jurisdiction for the purpose of hearing and determining any litigation, suit, action or proceedings and/or to settle any disputes arising out of or in any way relating to this Agreement or its formation or validity ("Proceedings") and for the purpose of enforcement of any judgment against its property or assets

(b) Nothing in this clause shall (or shall be construed so as to) limit the right of Zoomcar to initiate proceedings against any of its Members in accordance with mandates contained in Section 20 of the Civil Procedure Code, 1908.

(c) Notwithstanding anything contained in the foregoing sub clauses, the jurisdiction in relation to criminal proceedings shall be governed in accordance with the provisions contained in Chapter XIII of the Code of Criminal Procedure, 1973.  "

15.3 Member agrees to pay Zoomcar’s reasonable attorneys' fees and costs in any legal proceeding relating to this Agreement, including appeals, where the respective court or forum pronounces the order in favour of Zoomcar.

15.4 Member must not aid or encourage the filing of any third-party claim or lawsuit against Zoomcar, and Member must cooperate fully with Zoomcar and Zoomcar’s insurer in the investigation and defense of any claim or lawsuit. In any proceeding involving the Member and Zoomcar as co-defendants should Zoomcar determine in its sole discretion that the Member’s independent attorney has not aligned his defense similar to that of Zoomcar, Zoomcar shall be entitled to call upon the Member to change his attorney to one advised by Zoomcar and the Member shall accordingly change his attorney at his own cost.

15.5 Member must immediately notify and deliver to Zoomcar every summons, complaint, document, or notice of any kind received by Member in any way relating to an accident, theft, or other circumstances related to Zoomcar vehicle.

<h1>16. Severability and Integrated Agreement:</h1>

If any term, provision, covenant or condition of this Agreement is held invalid or unenforceable for any reason, the remainder of the provisions will continue in full force and effect as if this Agreement had been executed with the invalid portion eliminated. The Parties further agree to substitute for the invalid provision a valid provision that most closely approximates the intent and economic effect of the invalid provision. This Agreement, together with the User Guide, Trip Process, Member Application, Fee Policy / Rate Schedule, and any applicable consent forms, along with any amendments hereto, encompasses the entire agreement between Member and Zoomcar, and supersedes all previous understandings and agreements between Member and Zoomcar. Member acknowledges and represents that he or she has not relied on any representation, assertion, guarantee, warranty, collateral contract or other assurance, except those set out in this Agreement, made by or on behalf of any other party or any other person or entity whatsoever, prior to the execution of this Agreement.

<h1>17. No Waiver:</h1>

No term contained in this Agreement may be changed or waived, except in writing signed by an expressly authorized representative of Zoomcar. No waiver of default by Member/ You under any of the Terms or Conditions of this Agreement shall be construed as a waiver of any prior or subsequent default of any of the Terms or Conditions of this Agreement.

<h1>18. Assignment or Transfer:</h1>

The rights granted to the Member under this Agreement are not assignable or transferable, in whole or part. Any attempt to transfer this Agreement without the written consent of Zoomcar shall be void and of no force and effect. Zoomcar reserves the right and can at its absolute discretion can assign the rights and obligations under this Agreement to an affiliate or to another entity in connection with a corporate transaction or otherwise.

<h1>19. No Agency:</h1>

Member will never be deemed to be Zoomcar’s agent, servant, or employee in any manner for any purpose whatsoever.

<h1>20. Terms & Termination:</h1>

20.1 This Member Agreement shall continue to apply until terminated by either You or Zoomcar as set forth below. If You want to terminate Your agreement with Zoomcar, You may do so by (i) not accessing the Website; or (ii) closing Your Account for all of the Services that You use, where Zoomcar has made this option available to You.

20.2 You agree that Zoomcar may, in its sole discretion and without prior notice, terminate Your access to the Website and block Your future access to the Website if Zoomcar determines that You have violated the terms & conditions of this Member Agreement any other Policy(s) of the Website. You also agree that any violation by You of the Agreement(s) will cause irreparable harm to Zoomcar, for which monetary damages may be inadequate, and You consent to Zoomcar obtaining any injunctive or equitable relief that Zoomcar deems necessary or appropriate in such circumstances. These remedies are in addition to any other remedies which Zoomcar may have at law or in equity.

20.3 In addition to Clause 20.2 above, Zoomcar may, at any time, with or without notice, terminate these terms of the Member Agreement with You if:

•	Zoomcar is required to do so by law (for example, where the provision of the Services to You is, or becomes, unlawful), or upon request by any law enforcement or other government agencies;

•	The provision of the Services to You by Zoomcar is, in Zoomcar’ s sole discretion, no longer commercially viable;

•	Zoomcar has elected to discontinue, with or without reason, access to the Website, the Services (or any part thereof); or

•	In the event Zoomcar faces any unexpected technical issues or problems that prevent the Website and / or Services from working.

20.4 Zoomcar may also terminate or suspend all or a portion of Your Account or access to the Services with or without reason. Termination of Your Account may include: (i) removal of access to all offerings within the Website or with respect to the Services; (ii) disabling access to the Account Information, including Your personal information, log-in ID and password, and all related information, files and materials associated with or inside Your Account (or any part thereof), and any User Content uploaded by You; and (iii) prohibiting further use of the Services.

20.5 You agree that all terminations shall be made in Zoomcar’s sole discretion and that Zoomcar shall not be liable to You or any third party for any termination of Your Account (and accompanying deletion of Your Account Information), or Your access to the Website and Services.

20.6 Notwithstanding the foregoing, such terms of this Agreement as are meant to survive termination / expiry of this Agreement, will survive indefinitely unless and until Zoomcar chooses to terminate them.

<h1>21. Force Majeure:</h1>

If performance of any Service or obligation under the terms and conditions of this Member Agreement or any other provisions of the policies of the Website, or other third parties in fulfilment of transaction (for e.g. home deliveries of vehicles, payment gateways etc.) are, prevented, restricted, delayed or interfered with by reason of labour disputes, strikes, acts of God, floods, lightning, severe weather, shortages of materials, rationing, utility or communication failures, earthquakes, war, revolution, acts of terrorism, civil commotion, acts of public enemies, blockade, embargo or any law, order, proclamation, regulation, ordinance, demand or requirement having legal effect of any government or any judicial authority or representative of any such government, or any other act whatsoever, whether similar or dissimilar to those referred to in this clause, which are beyond the reasonable commercial control of Zoomcar or its third parties performing such services as sub-contractor to Zoomcar and could not have been prevented by reasonable precautions (each, a "Force Majeure Event"), then Zoomcar shall be excused from such performance to the extent of and during the period of such Force Majeure Event. Zoomcar shall exercise all reasonable commercial efforts to continue to perform its obligations hereunder.

<h1>22. Communications.</h1>

When You use the Website or send emails or other data, information or communication to Zoomcar, You agree and understand that You are communicating with Zoomcar through electronic records and You consent to receive communications via electronic records from Zoomcar periodically and as and when required. Zoomcar will communicate with You by email or by notices on Website or electronic records on the Website or on Your mobile number which will be deemed adequate service of notice / electronic record to the maximum extent permitted under any applicable law, It is further clarified that You can also use the customer support e-mail, facebook page and twitter handle of Zoomcar to share your words of appreciation pertaining to ride only.

<h1>23. Feedback and Information:</h1>

23.1 Any feedback You provide to Zoomcar shall be deemed to be non-confidential. Zoomcar reserves the right to use such information without any restriction. Further, by submitting the feedback, You represent and warrant that (i) Your feedback does not contain confidential or proprietary information of anybody including you and third parties; (ii) Zoomcar is not under any obligation of confidentiality, express or implied, with respect to the feedback; (iii) Zoomcar may have something similar to the feedback already under consideration or in development; and (iv) You are not entitled to any compensation or reimbursement of any kind from Zoomcar for the feedback under any circumstances.

23.2 To clarify, Zoomcar may at its discretion, make any modifications or changes to the Website, Content and / or Services on the basis of such feedback, however Zoomcar shall not be obliged to do so. Further, in the event that Zoomcar makes any changes or modifications to the Website, Content and / or Services on the basis of any such feedback, You shall not have any rights or title (including any intellectual property rights) in such changes or modifications to the Website, Content and / or Services. You expressly waive any and all rights in such changes or modifications to the Website, Content and / or Services, and assign to Zoomcar, all worldwide rights and title (including any intellectual property rights) to such changes or modifications to the Website, Content and / or Services, in perpetuity. You hereby waive all rights under Section 19(4) of the Indian Copyright Act, 1956, or other similar provisions in laws of any jurisdiction, in relation to any such changes or modifications to the Website, Content and / or Services.

<h1>24. Provisions for Traveller of Chauffeur Driven Vehicles:</h1>

24.1 Any issues of the driver, which attributes and directly relates to the personality of an individual including but not limited to behaviour, actions, voices, conduct, negligence etc., are not responsibility of Zoomcar in any case.

24.2 Zoomcar or driver on duty has the right to refuse the service in the following circumstances: a) if the traveller is found to be in an intoxicated state or is found misbehaving with other passengers or the driver, or is causing a nuisance; b) if the traveller is misusing, soiling or damaging any of the devices (technical/non-technical) of Zoomcar’ s vehicle.

24.3 If any traveller misses his/her next scheduled programmes viz next journey via train/ flight/bus, conference, functions, meetings, festivals etc; Zoomcar will not be liable for any compensation.

24.4 If the traveller has any complaints in respect of the services or the conduct of the driver, the traveller has to inform Zoomcar about the same in writing during the continuation of ride/trip.

24.5 Zoomcar declares that traveller opting for chauffeur driven vehicles must not drive the vehicle booked by traveller and consequently provisions of sections 2.1, 2.3, 2.4, 4.1 (a) & (c), 5.1, 5,2, 5.3, 5.5, 5.6, 8.2 and 11 of this Member Agreement would not be applicable to such traveller. It is further clarified that all other provision of this Member Agreement will be applicable to traveller mutatis-mutandis.

<h1>Note:-</h1>
For Member in Delhi & NCR:

(i). With effect from 1st April, 2016, none of Zoomcar’s vehicles in Delhi & NCR can be booked or used exclusively for journey within Delhi & NCR for entire booking time. Zoomcar makes it abundantly clear that the minimum booking period is 4 hour and all the users in Delhi & NCR must ensure that Zoomcar’s vehicle can be used only if it is possible to accomplish the journey including the destination outside Delhi & NCR within the opted booking time.

                </TabContainer>
        }
          {/* {value === 2 && <TabContainer>ELIGIBILITY</TabContainer>} */}
          {value === 2 && <TabContainer>PRIVACY POLICY</TabContainer>}
          {value === 3 && <TabContainer>INTER STATE TRAVEL</TabContainer>}
        </div>
      </NoSsr>
    );
  }
}

Policies.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Policies);
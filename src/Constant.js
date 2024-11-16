import moment from "moment";

export const States = [
    { stateName: "Alabama", Time: moment(new Date()).subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Alaska(Aleutian Islands)", Time: moment().subtract(15, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Aleutian Islands Time
    { stateName: "Alaska", Time: moment().subtract(14, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Alaska Time
    { stateName: "Arizona", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time (No DST)
    { stateName: "Arkansas", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "California", Time: moment().subtract(13, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Pacific Time
    { stateName: "Colorado", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "Connecticut", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Delaware", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "District Of Columbia", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Florida (northwest)", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Florida", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Georgia", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Hawaii", Time: moment().subtract(15, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Hawaii Time
    { stateName: "Idaho (north)", Time: moment().subtract(13, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "Idaho", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "Illinois", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Indiana (north, northwest)", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Indiana", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Iowa", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Kansas", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Kentucky (eastern part, south)", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Kentucky (western part)", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Louisiana", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Maine", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Maryland", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Massachusetts", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Michigan", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Michigan(northwest)", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Minnesota", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Mississippi", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Missouri", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Montana", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "Nebraska(west)", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Nebraska", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Nevada", Time: moment().subtract(13, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Pacific Time
    { stateName: "New Hampshire", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "New Jersey", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "New Mexico", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "New York", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "North Carolina", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "North Dakota", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "North Dakota(southwest)", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Ohio", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Oklahoma", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Oregon(east)", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Pacific Time
    { stateName: "Oregon", Time: moment().subtract(13, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Pacific Time
    { stateName: "Pennsylvania", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Rhode Island", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "South Carolina", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "South Dakota(west)", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "South Dakota", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Tennessee(east)", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Tennessee", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Texas", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Texas(west)", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Utah", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "Vermont", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Virginia", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Washington", Time: moment().subtract(13, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Pacific Time
    { stateName: "West Virginia", Time: moment().subtract(10, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Eastern Time
    { stateName: "Wisconsin", Time: moment().subtract(11, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Central Time
    { stateName: "Wyoming", Time: moment().subtract(12, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Mountain Time
    { stateName: "Guam", Time: moment().add(5, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Guam Time UTC+10
    { stateName: "Puerto Rico", Time: moment().subtract(9, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Puerto Rico Time UTC-4
    { stateName: "Virgin Islands", Time: moment().subtract(9, 'hours').format('YYYY-MM-DD HH:mm:ss') }, // Virgin Islands UTC-4
];
  export const StateTime = {
    "AL": "01:00",
    "AK": "01:00",
    "AZ": "01:00",
    "AR": "01:00",
    "CA": "01:00",
    "CO": "01:00",
    "CT": "01:00",
    "DE": "01:00",
    "DC": "01:00",
    "FL": "01:00",
    "GA": "01:00",
    "HI": "01:00",
    "ID": "01:00",
    "IL": "01:00",
    "IN": "01:00",
    "IA": "01:00",
    "KS": "01:00",
    "KY": "01:00",
    "LA": "01:00",
    "ME": "01:00",
    "MD": "01:00",
    "MA": "01:00",
    "MI": "01:00",
    "MN": "01:00",
    "MS": "01:00",
    "MO": "01:00",
    "MT": "01:00",
    "NE": "01:00",
    "NV": "01:00",
    "NH": "01:00",
    "NJ": "01:00",
    "NM": "01:00",
    "NY": "01:00",
    "NC": "01:00",
    "ND": "01:00",
    "OH": "01:00",
    "OK": "01:00",
    "OR": "01:00",
    "PA": "01:00",
    "RI": "01:00",
    "SC": "01:00",
    "SD": "01:00",
    "TN": "01:00",
    "TX": "01:00",
    "UT": "01:00",
    "VT": "01:00",
    "VA": "01:00",
    "WA": "01:00",
    "WV": "01:00",
    "WI": "01:00",
    "WY": "01:00",
    "GU": "01:00",
    "PR": "01:00",
    "VI": "01:00"
  }
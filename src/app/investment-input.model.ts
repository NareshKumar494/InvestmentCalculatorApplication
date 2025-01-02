export interface InvestmentInput {
  initialInvestment: number;
  duration: number;
  expectedReturn: number;
  annualInvestment: number;
}


// we can also use as type
// export type InvestmentInput = {  
//     initialInvestment: number;
//     duration: number;
//     expectedReturn: number;
//     annualInvestment: number;
// }
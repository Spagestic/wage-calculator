https://github.com/Spagestic/wage-calculator/assets/20869942/cdd2c775-ca13-4083-b25f-54aee091be16

# Wage Calculator - Statutory Entitlements for Domestic Helpers

This application was designed to assist domestic helpers in Hong Kong by calculating their statutory employment entitlements.

## Features

- Simplified calculation of Long Service Payment for domestic helpers

## Usage

To use the Wage Calculator online:

1. Go to [wagecal.netlify.app](https://wagecal.netlify.app/).
2. Enter working duration.
3. Enter your monthly working hours.
4. Review the Long Service Payment due.
5. Print the receipt as PDF.

## Eligibility for Long Service Payment

A domestic worker in Hong Kong is eligible for long service payment if they meet the following criteria:

1. They have been employed continuously for not less than 5 years[^1][^3].
2. Their employment is terminated for reasons other than serious misconduct or redundancy[^1][^3].
3. They are certified by a registered medical practitioner as permanently unfit for their present job and resign on such grounds[^2].
4. They are aged 65 or above and resign on grounds of old age[^2][^3].
5. They die during service[^2].

It's important to note that a domestic worker is not entitled to long service payment if the employer has offered, in writing, to renew the contract or re-engage the worker under a new contract at least 7 days before the expiry of the current contract, and the worker unreasonably refuses the offer[^1][^3].

## Calculation of Long Service Payment

The long service payment is calculated using the following formula:

$$(\text{Last month's wages} \times \frac{2}{3}) \times \text{Reckonable years of service}$$

Some key points about this calculation:

- Service for an incomplete year should be calculated on a pro-rata basis[^1][^2].
- The maximum amount of wages used for calculation is capped at $$\frac{2}{3}$$ of HK$22,500[^2].
- Employees may choose to use their average wages in the last 12 months for the calculation instead of the last month's wages[^2].

## Payment Timeline and Legal Obligations

Employers must pay the long service payment to their domestic worker within 7 days after the date of termination of the employment contract[^1][^3]. Failure to do so without reasonable excuse is a serious offense:

- Employers can be liable to prosecution and, upon conviction, face a fine of HK$350,000 and imprisonment for 3 years[^3][^5].

## Important Considerations

1. A domestic worker cannot be simultaneously entitled to both long service payment and severance payment[^2][^4].
2. If a domestic worker is dismissed due to redundancy and has worked for at least 24 months, they would be entitled to severance payment instead of long service payment[^4].
3. The current minimum allowable wage for foreign domestic helpers in Hong Kong is HK$4,870 per month (as of October 28, 2023)[^4].
4. Employers should be cautious about terminating contracts frequently, as they may risk being blacklisted by the Consulate[^4].
5. When terminating a contract, employers must follow proper procedures, including giving one month's notice, informing the Immigration Department, and settling all dues with the domestic worker[^4].

In conclusion, long service payment is an important statutory benefit for domestic workers in Hong Kong, designed to reward their long-term commitment and loyalty. Employers should be aware of their obligations regarding this payment to ensure compliance with Hong Kong labor laws.

## Built with

- **React JS**: Leveraging React's component-based architecture for efficient state management.
- **Mantine UI**: Enhancing the user experience with Mantine's customizable UI components.

## Getting Started

If you want to run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/yourusername/wagecalculator.git`
2. Install dependencies: `npm install` or `yarn install`
3. Start the development server: `npm start` or `yarn start`

## Contributing

Contributions are welcome! Please feel free to submit pull requests or open issues if you find any bugs or have suggestions for improvements.

[^1]: https://www.fdh.labour.gov.hk/en/faq.html
[^2]: https://www.clic.org.hk/en/topics/employmentDisputes/mattersRelatedToEmploymentOrdinance/terminationOfEmploymentAndTheRelevantPayments/long_service_payment
[^3]: https://www.helperchoice.com/c/domestic-helper/severance-payment-long-service-payment
[^4]: https://www.helperplace.com/blog/long-service-payment-helper-hong-kong
[^5]: https://www.labour.gov.hk/eng/public/wcp/ConciseGuide/11.pdf
[^6]: https://wise.com/hk/blog/long-service-payment
[^7]: https://www.overseas.com.hk/en/faq/things-i

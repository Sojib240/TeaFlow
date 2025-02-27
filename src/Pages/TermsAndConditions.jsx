import React from "react";
import Discount from "../Common/Discount";
import Title from "../Common/Title";

const TermsAndConditions = () => {
    document.title = "TeaFlow － Terms And Conditions Of Sale";
    const tearmsData = [
        {
            id: 1,
            title: "Formation of Contract",
            desc: "An Order is deemed by Seller to be an offer to purchase, which Seller may accept or reject at its sole discretion. Seller's acceptance of an offer to purchase is binding on Seller only if made by written instrument signed by the Seller or, if not by written instrument, by shipment of the Products ordered (and acceptance by shipment shall only be binding as to the portion of the order actually shipped by Seller). Any automatic or computer-generated response to an Order by Seller’s website or by Seller's internal electronic data exchange system or otherwise shall not be deemed acceptance of an Order.",
        },
        {
            id: 2,
            title: " Rejection of Additional Terms",
            desc: "These Terms, along with the face of any Order, constitute the entire agreement between Seller and Buyer.  Any proposal or other document provided by the Seller that includes different or additional terms that vary from these Terms are objected to and disallowed.",
        },
        {
            id: 3,
            title: "Pricing",
            desc: "All shipments will be billed at prices in effect at the date of fulfillment of the Order unless otherwise stated. All prices for products are based on the quantities ordered, and any change in the quantities may affect the price. No discounts will be allowed unless specifically agreed to in writing by Seller. Notwithstanding previous instances of Seller's notice to customers regarding price changes, prices are subject to change at any time without notice. Product specifications, designs, and packaging may change without notice. Sellers may substitute Products of comparable quality for Products listed in Buyer's Order.",
        },
        {
            id: 4,
            title: "Payment Terms",
            desc: "For consumer orders all payments must be made via credit card or valid Tea Flow Gift Card. Wholesale payment terms are prepay by ACH or credit card, unless otherwise specified in writing. On any past due invoice, Seller may impose interest of 2.0% per month or the highest rate permitted by law (whichever is less). In the event of Buyer's default, Seller may recover costs, fees, and expenses, including but not limited to recovery of attorney's fees, court costs and fees, and collections costs.",
        },
        {
            id: 5,
            title: " Cost of Delivery, Taxes, And Other Charges",
            desc: "Buyer shall pay the costs of delivery of the Products unless otherwise agreed to specifically in writing by Seller. Prices do not include sales, use, excise or similar taxes, or other charges. Any such tax or charge that Seller is required to pay, or to collect and remit, to any Government (national, state or local) and that are imposed on or measured by the sale will be added to the invoice price based on the applicable rates in effect at the time of shipment. If Seller prepays shipping, insurance, duties, or other related charges, Buyer shall reimburse Seller promptly for such charges.",
        },
        {
            id: 6,
            title: "Transfer of Property And Risk Of Loss",
            desc: "Seller retains the right and title to the Products sold to Buyer until Seller is paid in full for Products. Buyer shall obtain the right and title to the Products upon payment to Seller of the purchase price and any taxes, excuses or other charges. Unless otherwise specified in writing, all domestic shipments shall be delivered F.O.B. Seller's facility ('Domestic Delivery Point'), and all shipments to locations outside the United States shall be delivered Ex Works Seller's facility ('International Delivery Point') in accordance with the Incoterms 2023. The risk of loss, including without limitation the risk of loss, theft, damage, or destruction of the products, transfers to Buyer at the respective Domestic Delivery Point or International Delivery Point.",
        },
        {
            id: 7,
            title: "Delivery",
            desc: "All scheduled delivery dates are estimates based on a normal workload, and all deliveries are subject to change without liability to the Seller. Seller will use commercially reasonable effort to make shipments as scheduled and may make partial shipments unless otherwise specified by Buyer. Seller will not be liable for any delays incurred due to causes beyond its reasonable control, including acts of God, actions by any governmental authority, terrorism, fires, floods, windstorms, explosions, riots, protests, natural disasters, wars, sabotage, labor problems (including lockouts, strikes, and slowdowns), inability to obtain power, utilities, materials, labor, equipment or transportation, epidemics or pandemics (or the worsening thereof) or court injunction.",
        },
        {
            id: 8,
            title: "No Set-off",
            desc: "Buyer shall have no right of set-off or withholding, and no deduction of any amounts due from Buyer to Seller shall be made without Seller's prior, express written approval.",
        },
        {
            id: 9,
            title: "Disclaimer of Warranties",
            desc: "SELLER MAKES NO WARRANTIES OR REPRESENTATIONS TO BUYER OR ANY OTHER PERSON OF ANY KIND, WHETHER EXPRESS OR IMPLIED, WITH RESPECT TO THE PRODUCTS, AND SELLER SPECIFICALLY DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. PRODUCTS SOLD HEREUNDER ARE SOLD 'AS IS'. TO THE EXTENT THIRD-PARTY CERTIFICATIONS OR DESIGNATIONS RELATE TO THE PRODUCTS, SELLER DOES NOT MAKE ANY WARRANTIES RELATED TO THE CERTIFICATIONS OR DESIGNATIONS AND STATES THAT SUCH CERTIFICATIONS OR DESIGNATIONS MAY NOT BE TRANSFERABLE IF BUYER REPACKAGES OR MANIPULATES THE PRODUCT IN ANY MANNER.  BUYER ASSUMES ALL RISK WHATSOEVER AS TO THE RESULT OF THE USE OF PRODUCTS PURCHASED, WHETHER USED ALONE OR IN COMBINATION WITH OTHER PRODUCTS OR SUBSTANCES.",
        },
        {
            id: 10,
            title: "Limitation of Liability",
            desc: "NO CLAIM BY BUYER OF ANY KIND, WHETHER AS TO QUALITY OR AMOUNT OF PRODUCT DELIVERED OR NON-DELIVERY, SHALL BE GREATER IN AMOUNT THAN THE PURCHASE PRICE FOR THE PRODUCTS ACTUALLY RECEIVED BY SELLER AND IN RESPECT OF WHICH THE DAMAGES ARE CLAIMED.",
            desc2: "IN NO EVENT SHALL SELLER BE LIABLE TO BUYER FOR ANY INCIDENTAL, CONSEQUENTIAL, INDIRECT, STATUTORY, SPECIAL, EXEMPLARY, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOST PROFITS, LOSS OF USE, LOSS OF TIME, INCONVENIENCE, LOSS OF BUSINESS OPPORTUNITIES, DAMAGE TO GOODWILL OR REPUTATION, OR LOSS OF DATA, REGARDLESS OF WHETHER SUCH LIABILITY IS BASED ON BREACH OF CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR OTHERWISE, AND EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES OR DAMAGES THAT COULD HAVE BEEN REASONABLY FORESEEN.",
            desc3: "[Buyer shall indemnify and hold Seller harmless for any claims arising from or relating to Buyer's use or sale of Products.]",
        },
        {
            id: 11,
            title: "Inspection",
            desc: "Buyer shall inspect the Products promptly upon receipt for non-conformity. Failure by Buyer to provide Seller with written notice of a claim within 5 days from the date of delivery or, in the case of non-delivery, from the date fixed for delivery, shall constitute a waiver by Buyer of all claims with respect to such Products. SELLER'S SOLE OBLIGATION FOR A REMEDY TO BUYER SHALL BE REPLACEMENT OF NON-CONFORMING PRODUCTS.",
        },
        {
            id: 12,
            title: "Returns",
            desc: "Buyer may not return Products without Seller's express written permission, which may be given or withheld in Seller’s sole discretion. If Seller permits a return of Products, all shipments of returned Products must be marked with the assigned Sales Order Return (SOR) number indicating cause and nature of any Product defect. SOR numbers are valid for 30 days from the date Seller provides Buyer with the SOR number (the 'Return Period') and all associated Products must be received within the Return Period. If Seller does not receive all information it requires within the Return Period, Seller may return Products to Buyer at Buyer's sole expense. Final disposition of return credit is made by Seller in its sole discretion based on Seller's evaluation. Buyer may not make any deduction for returned Products for the remittance until a credit memo has been issued by Seller. All returned Products must be shipped freight prepaid and accompanied with copies of the original invoice.",
        },
        {
            id: 13,
            title: "Seller's Rights",
            desc: "If Buyer should fail in any manner to fulfill these Terms, Seller may defer further shipment until such default is cured. Remedies provided herein shall be in addition to, and not in lieu of, other remedies that may be available to Seller.",
        },
        {
            id: 14,
            title: "Governing Law and Venue",
            desc: "These Terms shall be construed, interpreted, and governed according to the laws of the State of Wisconsin, without giving effect to its principles of conflicts of laws. The UN Convention on Contracts for the International Sale of Goods shall not apply to this Agreement. Any claim arising from these Terms shall be brought in the state or federal courts based in Milwaukee County, Wisconsin. Seller consents to personal jurisdiction and waives all objections to jurisdiction and venue in such courts.",
        },
        {
            id: 15,
            title: "Compliance with Laws; Export Laws",
            desc: "Buyer and Seller shall comply with all applicable international, national, state, regional, and local laws and regulations with respect to their performance of these Terms. If applicable, Buyer shall adhere to all applicable United States export laws and regulations with respect to the Products.",
        },
        {
            id: 16,
            title: "Privacy",
            desc: "Seller’s Privacy Policy, located at https://tea-flow.com/privacy-policy governs the processing of all personal data collected in connection with the purchase of Products through Seller’s website.",
        },
        {
            id: 17,
            title: "Miscellaneous",
            desc: "No waiver by Seller of any of any term in these Terms or any breach hereof shall constitute or be deemed to be a waiver of any such term or any such breach in any other case. No waiver shall be deemed to occur as a result of the failure to enforce any term or condition of these Terms.",
            desc2: "If any clause or portion thereof shall be held by a court of competent jurisdiction to be illegal, invalid, or unenforceable, the remaining clauses or portions shall remain in full force and effect.",
            desc3: "Buyer may not assign any of its rights or delegate any of its obligations under these Terms without Seller’s prior written consent.  Any purported assignment or delegation in violation of this provision is null and void.",
            desc4: "Online reselling on Amazon.com or other marketplaces and websites is unauthorized without expressed written permission.",
            desc5: "The paragraph headings are for convenience only and shall not be used in interpreting or construing these Terms.",
        },
    ];
    return (
        <>
            <div className="pt-10 sm:pt-[4vw]">
                <Title text={"terms and conditions of sale"} />
            </div>
            <div className="px-5 sm:pl-[14.44vw] sm:pr-[32vw] mx-auto font-GolosRegular">
                <div className="mt-16 sm:mt-[7vw]">
                    <p className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] uppercase">
                        ALL ORDERS (“ORDERS”) FOR THE PURCHASE OF PRODUCTS AND
                        GOODS (“PRODUCTS”) BY A PURCHASER (“BUYER”) FROM P.B
                        CORP (“SELLER”), INCLUDING ORDERS MADE THROUGH THE
                        SELLER’S WEBSITE, INCORPORATE AND ARE GOVERNED BY THE
                        FOLLOWING TERMS AND CONDITIONS OF SALE ("TERMS"). BY
                        PLACING ANY ORDER BUYER ACCEPTS AND SHALL BE BOUND BY
                        THESE TERMS. IN THE CASE OF ANY CONFLICT BETWEEN THESE
                        TERMS AND ANY ORDER, THESE TERMS WILL CONTROL.
                    </p>
                </div>
                {tearmsData.map(
                    ({ id, title, desc, desc2, desc3, desc4, desc5 }) => {
                        return (
                            <>
                                <div key={id} className="mt-[4vw]">
                                    <div className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] flex items-center mb-5 sm:mb-[1vw]">
                                        <span className="block mr-[2vw]">
                                            {id}.
                                        </span>{" "}
                                        <span>{title}</span>
                                    </div>
                                    <p
                                        className={`text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] ${
                                            id == [9, 10] && "uppercase"
                                        }`}
                                    >
                                        {desc}
                                    </p>
                                    <p className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-5 sm:mt-[1vw]">
                                        {desc2}
                                    </p>
                                    <p
                                        className={`text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-5 sm:mt-[1vw] font-GolosBold ${
                                            id == 10 && "font-bold"
                                        }`}
                                    >
                                        {desc3}
                                    </p>
                                    <p className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-5 sm:mt-[1vw]">
                                        {desc4}
                                    </p>
                                    <p className="text-lg sm:text-[1.2vw] leading-[130%] sm:leading-[2.3vw] mt-5 sm:mt-[1vw]">
                                        {desc5}
                                    </p>
                                </div>
                            </>
                        );
                    }
                )}
            </div>
            <div className="mt-[14vw]">
                <Discount />
            </div>
        </>
    );
};

export default TermsAndConditions;

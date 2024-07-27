import {
  Button,
  Container,
  Heading,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

import Layout from "../_components/layout/layout";

interface SubscriptionenewalFailedProperties {
  title: string;
  username: string;
  expireTime: string;
  star: string;
  description: string;
  link: string;
  data: Array<{
    value: string;
  }>;
}

export const SubscriptionenewalFailed = ({
  title,
  username,
  star,
  description,
  link,
  data,
}: SubscriptionenewalFailedProperties) => {
  return (
    <Layout>
      <Preview>{username}, subscription renewal failed</Preview>
      <Section className="my-[56px]">
        <Container className="max-w-[680px] px-[48px] md:px-0">
          <Section className="my-[40px] flex flex-col items-center justify-center">
            <Heading
              as="h5"
              className="my-0 mb-[56px] text-center text-[24px] leading-[28px] text-[#121212]"
            >
              {title}
            </Heading>

            <Section>
              <Text className="my-0 text-[16px] font-[600] text-[#121212] md:text-[18px]">
                Hi {username},
              </Text>
              <Text className="text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
                {description}
              </Text>
            </Section>
            <Section className="">
              <ul className="m-0 list-none pl-0">
                {data?.map((userData, index) => {
                  return (
                    <li
                      key={index}
                      className="mt-[1rem] flex items-start text-[14px] md:text-[16px]"
                    >
                      <div className="mr-2 flex-shrink-0">
                        <Img
                          src={star}
                          alt="star"
                          className="h-[24px] w-[24px]"
                        />
                      </div>
                      <div>
                        <span className="leading-[19.36px] text-[#525252]">
                          {userData.value}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Section>
          </Section>
          <Section className="text-center">
            <Text className="my-0 text-left leading-[19px] text-[#525252] md:text-[16px]">
              To keep enjoying your Bi-monthly Features, please check your bank
              or update your payment details.
            </Text>

            <Section className="mt-[32px] w-[100%] text-center">
              <Container className="max-w-[680px]">
                <Button
                  target={"_blank"}
                  className="w-[100%] rounded-[8px] bg-[#F97316] py-[16px] text-[#FAFAFA] md:w-fit md:px-[2rem]"
                  href={link}
                >
                  Update Payment Details
                </Button>
              </Container>
            </Section>
          </Section>
        </Container>
        <Section className="my-[56px]">
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 font-[600] text-[#121212]">
              Regards,
              <br />
              Boilerplate
            </Text>
          </Container>
        </Section>
        <Section>
          <Container className="max-w-[680px] px-[48px] md:px-0">
            <Text className="my-0 text-justify text-[14px] leading-[19.36px] text-[#525252] md:text-[16px]">
              If you have questions, please visit our{" "}
              <Link className="font-[600] text-[#F67316]">FAQs</Link>, or email
              us at <Link className="text-[#F67316]">help@boilerplate.com</Link>
              . Our team can answer questions about your subscription status. To
              unsubscribe from future subscription renewal reminders,{" "}
              <Link className="font-[600] text-[#525252] underline">
                click here.
              </Link>
            </Text>
          </Container>
        </Section>
      </Section>
    </Layout>
  );
};

SubscriptionenewalFailed.PreviewProps = {
  title: "Subscription Renewal Failed",
  username: "John Doe",
  star: "https://i.imgur.com/bmprMwh.png",
  expireTime: "17th September, 2024",
  link: "www.boilerplate.com",
  description:
    "We are having some trouble processing your subscription renewal payment for your Bi-monthly Features. This could be because of either of the following reasons:",
  data: [
    {
      value: "Your payment card has been blocked by your bank.",
    },
    {
      value: "Your payment card has expired.",
    },
    {
      value: "You have insufficient funds in your account.",
    },
  ],
} satisfies SubscriptionenewalFailedProperties;

export default SubscriptionenewalFailed;

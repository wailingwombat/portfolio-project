import thumbnailPhoto1 from '../assets/images/thumbnails/thumbnail1_dashboard.webp';
import thumbnailPhoto1Fallback from '../assets/images/thumbnails/thumbnail1_dashboard.png';
import thumbnailPhoto2 from '../assets/images/thumbnails/thumbnail2_itsupport.webp';
import thumbnailPhoto2Fallback from '../assets/images/thumbnails/thumbnail2_itsupport.jpg';
import thumbnailPhoto3 from '../assets/images/thumbnails/thumbnail3_mail.webp';
import thumbnailPhoto3Fallback from '../assets/images/thumbnails/thumbnail3_mail.png';
import thumbnailPhoto4 from '../assets/images/thumbnails/thumbnail4_journey.webp';
import thumbnailPhoto4Fallback from '../assets/images/thumbnails/thumbnail4_journey.jpg';

export const projects = [
  {
    id: 'dashboard-survey',
    title: 'Internal Metrics Dashboard',
    description: 'From scattered feedback to actionable insight—centralized NPS and UX data shaped 83% of team roadmaps',
    company: 'IBM',
    companyColor: '#0F62FE',
    image: thumbnailPhoto1.src,
    imageFallback: thumbnailPhoto1Fallback.src,
    timeline: '2022 - Present',
    role: 'Lead Product Designer',
    team: 'User researcher, product owner, and 2 developers',

    contentSections: [
      {
        id: 'challenge-internal-metrics',
        type: 'text-with-image',
        title: 'The Challenge',
        content: 'Redesigning an internal survey tool and metrics dashboard that collect and support over 350 active teams and tools. The tool creates a centralized, consistent collection methodology for NPS and usability data, enabling teams to take action and improve their own tools user experience.',
        image: '/images/projects/dashboard-survey/survey_demo.webp',
        imageFallback: '/images/projects/dashboard-survey/survey_demo.gif',
        alt: 'Animated demo of the redesigned internal survey dashboard showing user feedback flow.',
        unoptimized: true,
        imageProps: {
          priority: true,
          className: 'object-cover'
        }
      },
      {
        id: 'redesign',
        type: 'text-with-image',
        title: 'The Redesign Approach',
        content: 'Unlike typical rebranding efforts, it needed to be subtle, seamlessly adapting to different site colors yet remaining noticeable for users to click on. Almost invisible when not in use. My task was to update the survey to comply to Carbon standards.',
        image: '/images/projects/dashboard-survey/survey_interation.png',
        alt: 'Screenshot of the new survey interface with updated Carbon-compliant design.'
      },
      {
        id: 'before-after',
        type: 'text-with-image',
        content: 'My task was to update the survey to comply to Carbon standards',
        image: '/images/projects/dashboard-survey/survey_redesign.png',
        alt: 'Before and after comparison of the survey redesign.'
      },
      {
        id: 'nps-pattern',
        type: 'text-with-image',
        content: 'I created new patterns for the Carbon Library. NPS scale and star rating.',
        image: '/images/projects/dashboard-survey/nps_pattern.png',
        alt: 'NPS scale and star rating pattern for Carbon Library.',
        imageProps: {
          priority: true,
          className: 'object-contain'
        }
      },
      {
        id: 'patterns',
        type: 'image-grid',
        title: 'Branding & Consistency',
        items: [
          {
            image: '/images/projects/dashboard-survey/vote_logo.png',
            description: 'I created new patterns for the Carbon Library. NPS sI redesigned the logo to align with internal branding guidelines.cale and star rating.',
            alt: 'Vote logo pattern for Carbon Library.'
          },
          {
            image: '/images/projects/dashboard-survey/pp_refresh.png',
            description: 'I ensured consistency across assets, logos, emails, presentations, and favicons.',
            alt: 'Updated assets, logos, and presentations for brand consistency.'
          }
        ]
      },
      {
        id: 'branding',
        type: 'image-grid',
        items: [
          {
            image: '/images/projects/dashboard-survey/old_logo.png',
            description: 'I collaborated with stakeholders to establish a single name, enhancing clarity for users.',
            alt: 'Old logo used before rebranding.'
          },
          {
            image: '/images/projects/dashboard-survey/logo_iteration.webp',
            imageFallback: '/images/projects/dashboard-survey/logo_iteration.gif',
            description: 'Logo iterations',
            alt: 'Animated gif showing logo design iterations.',
            unoptimized: true
          }
        ]
      },
      {
        id: 'user-experience',
        type: 'text-with-image',
        title: 'Less Obstructive Surveys',
        content: 'Surveys were designed to be less obstructive. The prior surveys had fixed modal backdrops. The new design increased flexibility, enabling users to move the survey. Special attention was given to ensuring compatibility with various website, app designs, and languages.',
        image: '/images/projects/dashboard-survey/language_iterations.png',
        alt: 'Survey modal with flexible design and language compatibility.'
      },
      {
        id: 'outcome',
        type: 'text-with-stats',
        title: 'Impact',
        content: 'There was a reduction in complaints of over surveying with new modal design changes.',
        stats: [
          { value: '350+', label: 'Active Teams Supported' },
          { value: '83%', label: 'Users said it directly affected roadmap planning' },
          { value: '35%', label: 'Reduction in surveys shown to users' }
        ]
      },
    ]
  },
  {
    id: 'it-support-chatbot',
    title: 'IT Support Chatbot',
    description: 'Designed an IT chatbot that reduced friction—and ticket volume',
    company: 'IBM',
    companyColor: '#0F62FE',
    image: thumbnailPhoto2.src,
    imageFallback: thumbnailPhoto2Fallback.src,
    timeline: '2019 - 2021',
    role: 'Lead Product Designer',
    team: '1 PM, 3 Engineers, 10 Content Writers',

    contentSections: [
      {
        id: 'support-agent-overwhelmed',
        type: 'text-with-image',
        title: 'The Challenge',
        content: 'Support agents were overwhelmed with answering common support problems rather than addressing complex IT issues. What if you could just ask those simple questions 24/7 on your phone? I was tasked to help the team complete discovery and launch the chatbot.',
        image: '/images/projects/it-support-chatbot/demo.webp',
        imageFallback: '/images/projects/it-support-chatbot/demo.gif',
        alt: 'Animated demo of the IT support chatbot interface in action.',
        unoptimized: true,
        imageProps: {
          priority: true,
          className: 'object-cover'
        }
      },
      {
        id: 'voice-personality',
        type: 'text-only',
        title: 'Determining the Voice and Personality',
        content: 'I designed and led multiple workshops with the team and product owner to determine the tone, voice, and, personality of the chatbot. Aligning everyone on shared goals, road map, and features.'
      },
      {
        id: 'workshop',
        type: 'text-image-split',
        content: 'I guided the team through activities for conversational design to define scope and assess technical feasibility.',
        image: '/images/projects/it-support-chatbot/workshop.png',
        imageLeft: false,
        centerText: false,
        alt: 'Team workshop for conversational design activities.'
      },
      {
        id: 'style-guide',
        type: 'text-image-split',
        content: 'A style guide, tailored to Slack, was developed through user interviews and collaboration with the content team.',
        image: '/images/projects/it-support-chatbot/style-guide.png',
        imageLeft: true,
        centerText: false,
        alt: 'Slack style guide developed for chatbot.'
      },
      {
        id: 'slack-blockkit',
        type: 'text-image-split',
        content: 'To ensure precise formatting for developers, I utilized Slack Block Kit.',
        image: '/images/projects/it-support-chatbot/slackblock-kit.png',
        imageLeft: false,
        centerText: false,
        alt: 'Slack Block Kit formatting example.'
      },
      {
        id: 'measure-success',
        type: 'text-with-image',
        title: 'How do you measure success?',
        content: 'My initial hypothesis was to keep the conversation as short as possible, focusing on concise instructions. To test this, I began by asking users to recall the last time IBMers had to reach out for help.',
        image: '/images/projects/it-support-chatbot/research-insights.png',
        alt: 'Research insights for chatbot success measurement.'
      },
      {
        id: 'idea',
        type: 'title-image-split',
        title: 'Breakthrough insight',
        text: "My interviews revealed a major flaw with the current prototype. It could not solve this user's issue.",
        image: '/images/projects/it-support-chatbot/bulb.png',
        imageLeft: false,
        centerText: true,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Lightbulb icon representing breakthrough insight.'
      },
      {
        id: 'quote-scenario',
        type: 'image-with-caption',
        image: '/images/projects/it-support-chatbot/quote-scenario.png',
        caption: "Illustration by Kat Altman from CIO design magazine highlighting the chatbot.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Magazine illustration highlighting the IT support chatbot.'
      },
      {
        id: 'user-quote-slack',
        type: 'quote',
        content: "I couldn't get into anything... could not access email, everything was broken, could not get pass the log in on mac computer. **I only had slack on my phone**. I do [have Maas], it's spotty, it was SOS, I slacked a guy I worked with [for IBM phone number], I was totally locked out of my computer. It took 4 hours. It was horrible. They asked me for my serial number [she didn't know it]. Then asked for my Slack name and sent me instructions."
      },
      {
        id: 'text-iterations',
        type: 'image-only',
        image: '/images/projects/it-support-chatbot/text-iterations.png',
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Text iterations for chatbot conversation design.'
      },
      {
        id: 'bench-mark-research',
        type: 'text-side-by-side',
        title: 'Continuous user research and conversation improvements',
        content: "I benchmarked our effectiveness by evaluating the bot's capability to solve a 'hardest' simple IT problem just on a phone, comparable to an advisor sending a detailed solution in a single long Slack message."
      },
      {
        id: 'content-design',
        type: 'image-only',
        image: '/images/projects/it-support-chatbot/content-design.png',
        imageProps: {
          priority: true,
          className: 'object-cover'
        }
      },
      {
        id: 'design-asset',
        type: 'image-only',
        image: '/images/projects/it-support-chatbot/design-asset.png',
        imageProps: {
          priority: true,
          className: 'object-cover'
        }
      },
      {
        id: 'research-insights',
        type: 'text-only',
        title: 'Research insights and opportunities',
        content: 'Given the negative to neutral sentiment associated with chatbot assistance at that time (before ChatGPT), it was imperative to make it easy for users to try, avoid leaving them hanging, and encourage usage through a feature that users naturally came to Slack for information.'
      },
      {
        id: 'user-quote-installation',
        type: 'quote',
        content: "I probably wouldn't use it unless it was already installed, in a channel or in my workspace, and someone said you can just ask the bot, it was just enabled for everyone."
      },
      {
        id: 'futureproof',
        type: 'image-grid',
        items: [
          {
            image: '/images/projects/it-support-chatbot/one-clickbutton.gif',
            description: 'Collaborating with the technical team, we devised a temporary solution, allowing users to try it immediately for the launch.',
            alt: 'Animated gif of one-click button for chatbot launch.',
            unoptimized: true
          },
          {
            image: '/images/projects/it-support-chatbot/search-hybrid.png',
            description: 'I came up with a hybrid search to address gaps in information while the content team continued to expand the corpus.',
            alt: 'Hybrid search interface for chatbot.',
          },
        ]
      },
      {
        id: 'slack-outages',
        type: 'image-grid',
        items: [
          {
            image: '/images/projects/it-support-chatbot/slack-outages.png',
            description: 'Outages I observed was a common question on Slack. This feature would be usable on a day-to-day basis rather than just for emergencies.',
            alt: 'Slack outages feature for chatbot.',
          },
        ]
      },
      {
        id: 'homepage-instruct',
        type: 'image-only',
        image: '/images/projects/it-support-chatbot/homepage-instructions.png',
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Homepage instructions for chatbot installation.'
      },
      {
        id: 'beta-launch',
        type: 'text-only',
        title: 'The beta launch',
        content: 'I worked closely with the content team to create installation instructions as we found a long term solution for having the app permanently installed.'
      },
      {
        id: 'feedback-flow-slack',
        type: 'text-image-split',
        content: 'Feedback was given on weekly updates with the team.',
        image: '/images/projects/it-support-chatbot/feedback-flow.webp',
        imageFallback: '/images/projects/it-support-chatbot/feedback-flow.gif',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Animated gif showing feedback flow for chatbot.',
        unoptimized: true
      },
      {
        id: 'launchpoint',
        type: 'text-image-split',
        content: "I designed multiple launch points across the support site.",
        image: '/images/projects/it-support-chatbot/launch-point.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Multiple launch points for chatbot on support site.'
      },
      {
        id: 'coordinate',
        type: 'text-image-split',
        content: "I coordinated with multiple teams, including the IT site, technical team, and homepage team, to synchronize various launches.",
        image: '/images/projects/it-support-chatbot/coordinate.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Coordination across teams for chatbot launch.'
      },
      {
        id: 'outcome',
        type: 'text-with-stats',
        title: 'Impact',
        content: 'Significantly reduced tickets for basic IT issues and the project was a successful testing ground and was the launch point for a full chatbot on the support website.',
        stats: [
          { value: '18.7', label: 'Increase in NPS' },
          { value: '38%', label: 'Reduction in simple Support Tickets' }
        ]
      },
    ]
  },
  {
    id: 'mail-migration',
    title: 'Enterprise Mail Migration',
    description: 'Designed the pilot that scaled to 300,000 employee email migrations—from Lotus Notes to Outlook',
    company: 'IBM',
    companyColor: '#0F62FE',
    image: thumbnailPhoto3.src,
    imageFallback: thumbnailPhoto3Fallback.src,
    timeline: '2017 - 2018',
    role: 'Product Designer',
    team: '2 Designers, 1 PM, 4 Engineers',

    contentSections: [
      {
        id: 'migrate-many',
        type: 'text-only',
        title: "The challenge",
        content: "Launched the pilot phase of a multi-year project to migrate over 300,000 IBM employees from Lotus Notes to Outlook, as part of IBM's digital transformation of internal tools.",
      },
      {
        id: 'legacy-tools',
        type: 'image-with-caption',
        image: '/images/projects/mail-migration/legacy-tools.png',
        caption: "The software and tools still being used during the migration in 2017.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Screenshot of legacy tools used during IBM mail migration in 2017.'
      },
      {
        id: 'legacy-tool',
        type: 'text-side-by-side',
        title: 'Transition through legacy systems',
        content: "Projects like this demand forward-thinking and strategic planning. The process is rarely straightforward or polished at the beginning, and it's often not the first attempt."
      },
      {
        id: 'transition-tools',
        type: 'image-with-caption',
        image: '/images/projects/mail-migration/updating-legacy.webp',
        imageFallback: '/images/projects/mail-migration/updating-legacy.gif',
        caption: "Working with legacy systems means the UI won't always look polished from the start, but every small improvement counts. The initial designs were rough due to the limitations of available tools. But it improved over time.",
        imageProps: {
          priority: true,
          className: 'object-contain'
        },
        alt: 'Animated gif showing updates to legacy system UI during migration.',
        unoptimized: true
      },
      {
        id: 'research-methods',
        type: 'icon-text-row',
        items: [
          {
            icon: 'fas fa-poll',
            title: 'Surveys',
            content: 'To track progress, I surveyed pilot users each sprint and automated the process with Survey Gizmo, which developers later integrated into our system.'
          },
          {
            icon: 'fas fa-users',
            title: 'Focus Group',
            content: 'I planned and conducted weekly focus groups with 5 - 10 users each cohort.'
          },
          {
            icon: 'fas fa-comments',
            title: 'Forum',
            content: 'I checked on a daily basis the forums to answer and troubleshoot problems with users.'
          }
        ]
      },
      {
        id: 'measure-improvements',
        type: 'image-with-caption',
        image: '/images/projects/mail-migration/surveys.png',
        caption: "To measure improvements, I needed to measure it overtime. I created feedback forms with specific timelines to track their experience through the whole process.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Survey feedback forms for tracking user experience during migration.'
      },
      {
        id: 'sms',
        type: 'text-image-split',
        content: "Through the evaluative research I found users still need more reassurance so I designed the tracking progress through text messages.",
        image: '/images/projects/mail-migration/sms.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'SMS tracking progress interface for migration updates.'
      },
      {
        id: 'emails',
        type: 'text-image-split',
        content: "The bulk of the design focused on content creation across emails, tutorials, FAQs, and the website, aiming to guide users through each step. For many, this was an intimidating process, as they had years of saved emails. I highlighted all possible failure points, keeping them informed of potential issues.",
        image: '/images/projects/mail-migration/emails.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Email and tutorial content for guiding users through migration.'
      },
      {
        id: 'bench-mark-research',
        type: 'text-side-by-side',
        title: 'Creating a seamless experience the long term',
        content: "Projects like this demand forward-thinking and strategic planning. The process is rarely straightforward or polished at the beginning, and it's often not the first attempt."
      },
      {
        id: 'personas',
        type: 'image-with-caption',
        image: '/images/projects/mail-migration/personas.png',
        caption: "I focused on two persona, this illustrates the streamlined migration journey.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Persona illustration for migration journey.'
      },
      {
        id: 'challenges',
        type: 'text-only',
        title: "Challenges",
        content: "At the time, the experience was fragmented, so I focused on creating a more unified user interface, displaying only what was necessary. IBM was still relying on legacy tools like Sometime and Connections, alongside newer interactions. Some tools were still in development, so I collaborated closely, integrating elements like the color palette and a new internal wiki to create a cohesive experience.",
      },
      {
        id: 'email-errors',
        type: 'text-image-split',
        content: "**Email coexistence errors:** managing the friction between two email clients that didn't work well together. The goal was to minimize the pain during the transition, knowing that issues with sending emails and creating calendar invites were inevitable.",
        image: '/images/projects/mail-migration/email-errors.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Screenshot of email coexistence errors during migration.'
      },
      {
        id: 'legacy-email',
        type: 'text-image-split',
        content: '**Legacy software and application issues:** managing the disjointed user experience of a patchwork system. I tried to create a more unified front, only showing what was necessary while knowing that some complexity and clutter were unavoidable.',
        image: '/images/projects/mail-migration/legacy-email.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Legacy email software interface during migration.'
      },
      {
        id: 'coordination-mail-migration',
        type: 'text-image-split',
        content: '**Large scale coordination:** this required understanding and coordinating every potential touchpoint that the user interacted with and also every team that manages it.',
        image: '/images/projects/mail-migration/coordination.png',
        imageLeft: false,
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Coordination diagram for large scale migration.'
      },
      {
        id: 'outcome',
        type: 'text-with-stats',
        title: 'Impact',
        content: 'The migration process was completed with minimal disruption to daily operations.',
        stats: [
          { value: '300,000', label: 'Employees migrated' },
          { value: '↗', label: 'Productivity increase using modern email' },
          { value: '↗', label: 'NPS points' }
        ]
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain Application and Website',
    description: 'Streamlined developer onboarding for IBM Blockchain, achieving a 50% engagement rate.',
    company: 'IBM',
    companyColor: '#0F62FE',
    image: thumbnailPhoto4.src,
    imageFallback: thumbnailPhoto4Fallback.src,
    timeline: '2016 - 2017',
    role: 'Product Designer',
    team: '5 Designers, 1 PM, 10 cross functional team',

    contentSections: [
      {
        id: 'challenge-scale-metrics',
        type: 'text-only',
        title: 'The Challenge',
        content: 'This project had two main goals. The first is to find a scaleable method for all IBM.com product teams to evaluate and improve their entire end-to-end journey against competitors. The second goal was testing and creating the right template and methods. I was tasked to **pilot a framework with IBM Blockchain**, one of our newer products. This laid the foundation for helping teams prioritize work based on user pain points, satisfaction, engagement, and ROI, while also improving the developer onboarding experience for IBM Blockchain.',
      },
      {
        id: 'fancy-blockchain',
        type: 'image-only',
        image: '/images/projects/blockchain/fancy-blockchain.webp',
        imageFallback: '/images/projects/blockchain/fancy-blockchain.gif',
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Animated gif of IBM Blockchain application interface.',
        unoptimized: true
      },
      {
        id: 'buy-in-blockchain',
        type: 'text-side-by-side',
        title: 'Getting buy-in through mixed-method aproach',
        content: 'To encourage IBM Blockchain team to collaborate and buy-in into the evaluation process, I began by assessing the "Explore and Evaluate" phase of applications user experience. The fixes were simple but had the potential to significantly impact acquiring new users.',
      },
      {
        id: 'legacy-tools',
        type: 'image-with-caption',
        image: '/images/projects/blockchain/heatmap.webp',
        imageFallback: '/images/projects/blockchain/heatmap.gif',
        caption: "I worked with IBM Blockchain PO and visual designers to improve their hero and navigation to tutorials.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Heatmap visualization for IBM Blockchain homepage.',
        unoptimized: true
      },
      {
        id: 'heatmap',
        type: 'text-side-by-side',
        title: 'Analyzing the web experience with heatmaps',
        content: 'Using Hotjar, I analyzed heatmaps and click-through rates to understand user navigation and funneling patterns. I provided the product and design teams with recommendations to enhance the homepage, focusing on key areas: highlighting pricing, reducing clicks to access information, targeting the developer persona over a generic technical lead, and introducing a trial option.',
      },
      {
        id: 'comp-analysis',
        type: 'image-only',
        image: '/images/projects/blockchain/comp-analysis.png',
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Competitive analysis chart for blockchain onboarding.'
      },
      {
        id: 'end-to-end',
        type: 'text-only',
        title: 'End to end heuristic review of application',
        content: 'By comparing the process of setting up a smart contract with a leading competitor, I identified errors in the tutorial and reduced friction in setting up and instantiating a chaincode, making it easier for users to create a smart contract for the first time. \n\nBased on competitive analysis, I also recommended revamping the pricing model and introducing a trial option. The barrier to entry was too high for the average developer, as the product was targeting general executives rather than a more specific, relevant audience.',
      },
      {
        id: 'pricing-model',
        type: 'image-with-caption',
        image: '/images/projects/blockchain/pricing-model.png',
        caption: "Based on the competitive analysis, I recommended a revamp of their pricing model and also adding a trial.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Pricing model recommendation for IBM Blockchain.'
      },
      {
        id: 'end-to-end-journey',
        type: 'image-with-caption',
        image: '/images/projects/blockchain/end-to-end-journey.png',
        caption: "Distilling the research and insight for the entire end-to-end experience into an ideal experience map for the IBM Blockchain team.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'End-to-end experience map for IBM Blockchain.'
      },
      {
        id: 'documentation',
        type: 'image-with-caption',
        image: '/images/projects/blockchain/documentation.png',
        caption: "Documentation for the different methods of evaluations for the design team.",
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Documentation for evaluation methods in blockchain project.'
      },
      {
        id: 'challenges',
        type: 'text-only',
        title: 'Challenges',
        content: 'With any research, the most critical aspect is the ability to distill insights and distribute them to teams. A presentation will not help teams track progress or create actionable tasks. To make it easy, they need a system where they can simply integrate the insights and track improvements quarterly with each iteration.\n\nJourney maps are unique to each organization and project and can be time-consuming to create, especially for non-designers. By examining industry standards and speaking with product owners and small teams, I gained an understanding of their capabilities and the amount of time they could realistically commit.\n\nThis insight helped me distill the tasks needed to develop a flexible journey map that could be used by anyone in the company.',
      },
      {
        id: 'workflow-automation',
        type: 'image-with-caption',
        image: '/images/projects/blockchain/workflow-automation.png',
        caption: 'Transitioning from a spreadsheet to an internal tool enables teams to log their top "jobs to be done" and consistently record the quality of those experiences in a way that is both standardized and easily comparable.',
        imageProps: {
          priority: true,
          className: 'object-cover'
        },
        alt: 'Workflow automation tool for tracking jobs to be done.'
      },
      {
        id: 'official-program',
        type: 'text-side-by-side',
        title: 'Official Journey Program',
        content: "Today, the program is an official part of our design thinking process and is featured on our internal website."
      },
      {
        id: 'journey-template',
        type: 'text-image-split',
        content: '**Creating a scalable journey template** \n\nEstablishing a framework for other designers across IBM to assess and evaluate IBM.com products.',
        image: '/images/projects/blockchain/journey-template.png',
        imageLeft: true,
        imageHeight: '500px',
        imageProps: {
          priority: true,
          className: 'object-contain'
        },
        alt: 'Journey template for evaluating IBM.com products.'
      },
      {
        id: 'improved-grade',
        type: 'text-image-split',
        content: '**Improving the trial and homepage clickthrough for IBM Blockchain** \n\nThe refreshed web experience proved successful, with the new platform page garnering 16k views and a ~50% engagement rate in March 2018. Engagement increased across all site areas, including the pricing chart, which saw high user interaction. \n\nStrong NPS scores and positive feedback highlighted the impact. Additionally, the new developer-focused page attracted 8k views with a similar ~50% engagement rate.',
        image: '/images/projects/blockchain/improved-grade.png',
        imageLeft: true,
        imageHeight: '500px',
        imageProps: {
          priority: true,
          className: 'object-contain'
        },
        alt: 'Improved homepage and trial clickthrough for IBM Blockchain.'
      },
      {
        id: 'outcome',
        type: 'text-with-stats',
        title: 'Impact',
        content: 'The redesigned blockchain platform significantly improved developer onboarding experience.',
        stats: [
          { value: '16k', label: 'In views' },
          { value: '50%', label: 'Engagement increase' },
          { value: '↗', label: 'In NPS score' }
        ]
      }
    ]
  }
];

const parseMarkdownBoldAndParagraphs = (text) => {
  return text.split('\n\n').map((para, i) => (
    <p key={i} style={{ marginBottom: '1em' }}>
      {para.split('**').map((part, index) =>
        index % 2 === 0 ? part : <strong key={index}>{part}</strong>
      )}
    </p>
  ));
};
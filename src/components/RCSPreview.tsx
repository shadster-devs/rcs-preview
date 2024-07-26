import React from 'react';
import styles from './RCSPreview.module.scss';

interface Button {
  displayText: string;
}

interface TextTemplateProps {
  content: string;
  buttons?: Button[];
}

export const TextTemplate: React.FC<TextTemplateProps> = ({ content, buttons }) => (
  <div className={styles['text-template']}>
    <div className={styles['text-template-content']}>{content}</div>
    <div className={styles['text-template-suggestion-buttons-list']}>
      {buttons?.map((button, index) => (
        <button className={styles['text-template-suggestion-button']} key={index}>{button.displayText} </button>
      ))}
    </div>
  </div>
);

interface RichCardTemplateProps {
  title: string;
  description: string;
  mediaUrl: string;
  orientation: 'VERTICAL' | 'HORIZONTAL';
  alignment?: 'LEFT' | 'RIGHT';
  mediaHeight?: 'SHORT_HEIGHT' | 'MEDIUM_HEIGHT';
  buttons: Button[];
}

export const RichCardTemplate: React.FC<RichCardTemplateProps> = (props) => {

  const { title, description, mediaUrl, orientation, alignment, mediaHeight, buttons } = props;

  const isVertical = orientation === 'VERTICAL';
  const isHorizontal = orientation === 'HORIZONTAL';

  const isAlignmentEnabled = isHorizontal;
  const isMediaHeightEnabled = isVertical;

  const isAlignmentLeft = alignment === 'LEFT' && isAlignmentEnabled;
  const isAlignmentRight = alignment === 'RIGHT' && isAlignmentEnabled;

  const isMediaHeightShort = mediaHeight === 'SHORT_HEIGHT' && isMediaHeightEnabled;
  const isMediaHeightMedium = mediaHeight === 'MEDIUM_HEIGHT' && isMediaHeightEnabled;

  const mediaContainerHeightClass = isMediaHeightShort ? styles['rich-card-template-media-container-short'] : isMediaHeightMedium ? styles['rich-card-template-media-container-medium'] : styles['rich-card-template-media-container'];

  const templateClass = isAlignmentLeft ? styles['rich-card-template-horizontal-left'] : isAlignmentRight ? styles['rich-card-template-horizontal-right'] : styles['rich-card-template-vertical'];

  const mediaContainerOrientaionClass = isVertical ? styles['rich-card-template-media-container-vertical'] : styles['rich-card-template-media-container-horizontal'];

  const contentOrientationClass = isVertical ? styles['rich-card-template-content-vertical'] : styles['rich-card-template-content-horizontal'];

  return (
    <div className={`${styles['rich-card-template']} ${templateClass}`}>
      <div className={`${styles['rich-card-template-media-container']} ${mediaContainerOrientaionClass} ${mediaContainerHeightClass}`}>
        <img className={`${styles['rich-card-template-media']}`}  src={mediaUrl} alt="MediaImage"/>
      </div>
      <div className={`${styles['rich-card-template-content']} ${contentOrientationClass}`}>
        <div className={`${styles['rich-card-template-text-container']}`}>
          <div className={styles['rich-card-template-title']}>{title}</div>
          <div className={styles['rich-card-template-description']}>{description}</div>
        </div>
        <div className={styles['rich-card-template-buttons']}>
          {buttons.map((button, index) => (
            <button className={styles['rich-card-template-button']} key={index}>{button.displayText}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

interface CarouselItem {
  title: string;
  description: string;
  mediaUrl: string;
  buttons: Button[];
}

interface CarouselTemplateProps {
  width: 'SMALL_WIDTH' | 'MEDIUM_WIDTH';
  height: 'SHORT_HEIGHT' | 'MEDIUM_HEIGHT';
  carouselList: CarouselItem[];
}

export const CarouselTemplate: React.FC<CarouselTemplateProps> = (props) => {

  const { width, height, carouselList } = props;


  const dimensions = height+"_"+width;

  const styleMap : Record<string, string> = {
    'SHORT_HEIGHT_SMALL_WIDTH': styles['carousel-template-media-short-height-small-width'],
    'SHORT_HEIGHT_MEDIUM_WIDTH': styles['carousel-template-media-short-height-medium-width'],
    'MEDIUM_HEIGHT_SMALL_WIDTH': styles['carousel-template-media-medium-height-small-width'],
    'MEDIUM_HEIGHT_MEDIUM_WIDTH': styles['carousel-template-media-medium-height-medium-width'],
  }

  const mediaClass = styleMap[dimensions];


  return (
    <div className={`${styles['carousel-templates-container']}`}>
      {carouselList.map((carouselItem, index) => (
        <div className={`${styles['carousel-template']}`  } key={index}>
          <div className={`${styles['carousel-template-media-container']}`}>
            <img className={`${styles['carousel-template-media']} ${mediaClass}`} src={carouselItem.mediaUrl} alt="MediaImage"/>
          </div>
          <div className={styles['carousel-template-content']}>
            <div className={styles['carousel-template-text-container']}>
              <div className={styles['carousel-template-title']}>{carouselItem.title}</div>
              <div className={styles['carousel-template-description']}>{carouselItem.description}</div>
            </div>
            <div className={styles['carousel-template-buttons']}>
              {carouselItem.buttons.map((button, index) => (
                <button className={styles['carousel-template-button']} key={index}>{button.displayText}</button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export const RCSPreviewExample: React.FC = () => {


  const textTemplatesList : TextTemplateProps[] = [
  {
    content: 'Hello World with suggeasdasdadasstionssuggeasdasdadasstionssuggeasdasdadasstionssuggeasdasdadasstionssuggeasdasdadasstions!',
    buttons: [
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
    ],
  },{
    content: 'Hello World!',
  }];

  const richCardTemplatesList : RichCardTemplateProps[] = [
{
    title: 'Rich Card Vertical Short Height',
    description: 'A Rich CarasdasdaasdasdasdasasdasddCarasdasdaasdasdasdasdasddCarasdasdaasdasdasdasdasdd Ticket example',
    mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
    orientation: 'VERTICAL',
    mediaHeight: 'SHORT_HEIGHT',
    buttons: [
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
    ],
  }, {
    title: 'Rich Card Vertical Medium Height',
    description: 'A Rich CarasdasdaasdasdasdasdasdaasdasdasdasdasddCarasdasdaasdasdasdasdasddCarasdasdaasdasdasdasdasdd Ticket example',
    mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
    orientation: 'VERTICAL',
    mediaHeight: 'MEDIUM_HEIGHT',
    buttons: [
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
    ],
  },
    {
    title: 'Rich Card Horizontal Left ',
    description: 'A Rich CarasdasdaasdasdasdasdasddCaaasdasdasdasdasddCarasdasdaasdasdasdasdasdd Ticket example',
    mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
    orientation: 'HORIZONTAL',
    alignment : 'LEFT',
    buttons: [
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
    ],
  },{
    title: 'Rich Card Horizontal Right',
    description: 'A Rich CarasdasdaasdasdasdasdasddCaradasdaasdasdasdasdasddCarasdasdaasdasdasdasdasddCarasdasdaasdasdasdasdasddCarasdasdaasdasdasdasdasdd Ticket example',
    mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
    orientation: 'HORIZONTAL',
    alignment : 'RIGHT',
    buttons: [
      { displayText: 'Like' },
      { displayText: 'Stop please' },
      { displayText: 'Call us' },
    ],
  }
  ]

  const carouselTemplatesList : CarouselTemplateProps[] = [ {
    height: 'SHORT_HEIGHT',
    width: 'SMALL_WIDTH',
    carouselList: [
      {
        title: 'Rich Card Short Height Small Width',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      },
      {
        title: 'Rich Card Ticket test',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      }
    ]
  }, {
    height: 'MEDIUM_HEIGHT',
    width: 'SMALL_WIDTH',
    carouselList: [
      {
        title: 'Rich Card Medium Height Small Width',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      },
      {
        title: 'Rich Card Ticket test',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      }
    ]
  }
  ,{
    height: 'SHORT_HEIGHT',
    width: 'MEDIUM_WIDTH',
    carouselList: [
      {
        title: 'Rich Card Short Height Medium Width',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      },
      {
        title: 'Rich Card Ticket test',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      }
    ]
  }, {
    height: 'MEDIUM_HEIGHT',
    width: 'MEDIUM_WIDTH',
    carouselList: [
      {
        title: 'Rich Card Medium Height Medium Width',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      },
      {
        title: 'Rich Card Ticket test',
        description: 'A Rich Card Ticket example',
        mediaUrl: 'https://iris.makemytrip.com/iris/pr/d90/mmt/MicrosoftTeams-image_QtG8zVpMhxNc.png',
        buttons: [
          { displayText: 'Like' },
          { displayText: 'Stop please' },
          { displayText: 'Call us' },
        ],
      }
    ]
  }
  ];

  const textMessages = textTemplatesList.map((textTemplateData, index) => (
    <div className={styles['chat-message']} key={index}>
      <div className={styles['circle-icon']}></div>
      <TextTemplate {...textTemplateData} />
    </div>
  ));

    const richCardMessages = richCardTemplatesList.map((richCardTemplateData, index) => (
        <div className={styles['chat-message']} key={index}>
        <div className={styles['circle-icon']}></div>
        <RichCardTemplate {...richCardTemplateData} />
        </div>
    ));

    const carouselMessages = carouselTemplatesList.map((carouselTemplateData, index) => (
        <div className={styles['chat-message']} key={index}>
        <div className={styles['circle-icon']}></div>
        <CarouselTemplate {...carouselTemplateData} />
        </div>
    ));




  return (
      <div className={styles.previewContainer}>
        <div className={styles.preview}>
          <div className={styles['messaging-app-top-bar']}>
            <div className={styles['business-icon']}></div>
            <div className={styles['business-info']}>
              <div className={styles['business-name']}>RCS Preview</div>
              <div className={styles['business-status']}>Online</div>
            </div>
          </div>
          <div className={styles['messaging-app-messages']}>
            {textMessages}
            {richCardMessages}
            {carouselMessages}
          </div>
          <div className={styles['messaging-app-bottom-bar']}>
            <input className={styles['text-input']} placeholder="Type a message..."/>
            <button className={styles['send-button']}>Send</button>
            </div>
        </div>
      </div>
  );
};


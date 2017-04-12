// import React from 'react';
var React = require('react');

var GlyphiconConstants = {
    Earphone: <span className='glyphicon glyphicon-earphone' />,
    Glass: <span className='glyphicon glyphicon-glass' />,
    Music: <span className='glyphicon glyphicon-music' />,
    Search: <span className='glyphicon glyphicon-search' />,
    Envelope: <span className='glyphicon glyphicon-envelope' />,
    Heart: <span className='glyphicon glyphicon-heart' />,
    Star: <span className='glyphicon glyphicon-star' />,
    StarEmpty: <span className='glyphicon glyphicon-star-empty' />,
    User: <span className='glyphicon glyphicon-user' />,
    Login: <span className='glyphicon glyphicon-log-in' />,
    Film: <span className='glyphicon glyphicon-film' />,
    ThLarge: <span className='glyphicon glyphicon-th-large' />,
    Th: <span className='glyphicon glyphicon-th' />,
    ThList: <span className='glyphicon glyphicon-th-list' />,
    Ok: <span className='glyphicon glyphicon-ok' />,
    Remove: <span className='glyphicon glyphicon-remove' />,
    ZoomIn: <span className='glyphicon glyphicon-zoom-in' />,
    ZoomOut: <span className='glyphicon glyphicon-zoom-out' />,
    Off: <span className='glyphicon glyphicon-off' />,
    Signal: <span className='glyphicon glyphicon-signal' />,
    Cog: <span className='glyphicon glyphicon-cog' />,
    Trash: <span className='glyphicon glyphicon-trash' />,
    Home: <span className='glyphicon glyphicon-home' />,
    File: <span className='glyphicon glyphicon-file' />,
    Time: <span className='glyphicon glyphicon-time' />,
    Road: <span className='glyphicon glyphicon-road' />,
    DownloadAlt: <span className='glyphicon glyphicon-download-alt' />,
    Download: <span className='glyphicon glyphicon-download' />,
    Upload: <span className='glyphicon glyphicon-upload' />,
    Inbox: <span className='glyphicon glyphicon-inbox' />,
    PlayCircle: <span className='glyphicon glyphicon-play-circle' />,
    Repeat: <span className='glyphicon glyphicon-repeat' />,
    Refresh: <span className='glyphicon glyphicon-refresh' />,
    ListAlt: <span className='glyphicon glyphicon-list-alt' />,
    Lock: <span className='glyphicon glyphicon-lock' />,
    Flag: <span className='glyphicon glyphicon-flag' />,
    Headphones: <span className='glyphicon glyphicon-headphones' />,
    VolumeOff: <span className='glyphicon glyphicon-volume-off' />,
    VolumeDown: <span className='glyphicon glyphicon-volume-down' />,
    VolumeUp: <span className='glyphicon glyphicon-volume-up' />,
    Qrcode: <span className='glyphicon glyphicon-qrcode' />,
    Barcode: <span className='glyphicon glyphicon-barcode' />,
    Tag: <span className='glyphicon glyphicon-tag' />,
    Tags: <span className='glyphicon glyphicon-tags' />,
    Book: <span className='glyphicon glyphicon-book' />,
    Bookmark: <span className='glyphicon glyphicon-bookmark' />,
    Print: <span className='glyphicon glyphicon-print' />,
    Camera: <span className='glyphicon glyphicon-camera' />,
    Font: <span className='glyphicon glyphicon-font' />,
    Bold: <span className='glyphicon glyphicon-bold' />,
    Italic: <span className='glyphicon glyphicon-italic' />,
    TextHeight: <span className='glyphicon glyphicon-text-height' />,
    TextWidth: <span className='glyphicon glyphicon-text-width' />,
    AlignLeft: <span className='glyphicon glyphicon-align-left' />,
    AlignCenter: <span className='glyphicon glyphicon-align-center' />,
    AlignRight: <span className='glyphicon glyphicon-align-right' />,
    AlignJustify: <span className='glyphicon glyphicon-align-justify' />,
    List: <span className='glyphicon glyphicon-list' />,
    IndentLeft: <span className='glyphicon glyphicon-indent-left' />,
    IndentRight: <span className='glyphicon glyphicon-indent-right' />,
    FacetimeVideo: <span className='glyphicon glyphicon-facetime-video' />,
    Picture: <span className='glyphicon glyphicon-picture' />,
    Pencil: <span className='glyphicon glyphicon-pencil' />,
    MapMarker: <span className='glyphicon glyphicon-map-marker' />,
    Adjust: <span className='glyphicon glyphicon-adjust' />,
    Tint: <span className='glyphicon glyphicon-tint' />,
    Edit: <span className='glyphicon glyphicon-edit' />,
    Share: <span className='glyphicon glyphicon-share' />,
    Check: <span className='glyphicon glyphicon-check' />,
    Move: <span className='glyphicon glyphicon-move' />,
    StepBackward: <span className='glyphicon glyphicon-step-backward' />,
    FastBackward: <span className='glyphicon glyphicon-fast-backward' />,
    Backward: <span className='glyphicon glyphicon-backward' />,
    Play: <span className='glyphicon glyphicon-play' />,
    Pause: <span className='glyphicon glyphicon-pause' />,
    Stop: <span className='glyphicon glyphicon-stop' />,
    Forward: <span className='glyphicon glyphicon-forward' />,
    FastForward: <span className='glyphicon glyphicon-fast-forward' />,
    StepForward: <span className='glyphicon glyphicon-step-forward' />,
    Eject: <span className='glyphicon glyphicon-eject' />,
    ChevronLeft: <span className='glyphicon glyphicon-chevron-left' />,
    ChevronRight: <span className='glyphicon glyphicon-chevron-right' />,
    PlusSign: <span className='glyphicon glyphicon-plus-sign' />,
    MinusSign: <span className='glyphicon glyphicon-minus-sign' />,
    RemoveSign: <span className='glyphicon glyphicon-remove-sign' />,
    OkSign: <span className='glyphicon glyphicon-ok-sign' />,
    QuestionSign: <span className='glyphicon glyphicon-question-sign' />,
    InfoSign: <span className='glyphicon glyphicon-info-sign' />,
    Screenshot: <span className='glyphicon glyphicon-screenshot' />,
    RemoveCircle: <span className='glyphicon glyphicon-remove-circle' />,
    OkCircle: <span className='glyphicon glyphicon-ok-circle' />,
    BanCircle: <span className='glyphicon glyphicon-ban-circle' />,
    ArrowLeft: <span className='glyphicon glyphicon-arrow-left' />,
    ArrowRight: <span className='glyphicon glyphicon-arrow-right' />,
    ArrowUp: <span className='glyphicon glyphicon-arrow-up' />,
    ArrowDown: <span className='glyphicon glyphicon-arrow-down' />,
    ShareAlt: <span className='glyphicon glyphicon-share-alt' />,
    ResizeFull: <span className='glyphicon glyphicon-resize-full' />,
    ResizeSmall: <span className='glyphicon glyphicon-resize-small' />,
    Plus: <span className='glyphicon glyphicon-plus' />,
    Minus: <span className='glyphicon glyphicon-minus' />,
    Asterisk: <span className='glyphicon glyphicon-asterisk' />,
    ExclamationSign: <span className='glyphicon glyphicon-exclamation-sign' />,
    Gift: <span className='glyphicon glyphicon-gift' />,
    Leaf: <span className='glyphicon glyphicon-leaf' />,
    Fire: <span className='glyphicon glyphicon-fire' />,
    EyeOpen: <span className='glyphicon glyphicon-eye-open' />,
    EyeClose: <span className='glyphicon glyphicon-eye-close' />,
    WarningSign: <span className='glyphicon glyphicon-warning-sign' />,
    Plane: <span className='glyphicon glyphicon-plane' />,
    Calendar: <span className='glyphicon glyphicon-calendar' />,
    Random: <span className='glyphicon glyphicon-random' />,
    Comment: <span className='glyphicon glyphicon-comment' />,
    Magnet: <span className='glyphicon glyphicon-magnet' />,
    ChevronUp: <span className='glyphicon glyphicon-chevron-up' />,
    ChevronDown: <span className='glyphicon glyphicon-chevron-down' />,
    Retweet: <span className='glyphicon glyphicon-retweet' />,
    ShoppingCart: <span className='glyphicon glyphicon-shopping-cart' />,
    FolderClose: <span className='glyphicon glyphicon-folder-close' />,
    FolderOpen: <span className='glyphicon glyphicon-folder-open' />,
    ResizeVertical: <span className='glyphicon glyphicon-resize-vertical' />,
    ResizeHorizontal: <span className='glyphicon glyphicon-resize-horizontal' />,
    Hdd: <span className='glyphicon glyphicon-hdd' />,
    Bullhorn: <span className='glyphicon glyphicon-bullhorn' />,
    Bell: <span className='glyphicon glyphicon-bell' />,
    Certificate: <span className='glyphicon glyphicon-certificate' />,
    ThumbsUp: <span className='glyphicon glyphicon-thumbs-up' />,
    ThumbsDown: <span className='glyphicon glyphicon-thumbs-down' />,
    HandRight: <span className='glyphicon glyphicon-hand-right' />,
    HandLeft: <span className='glyphicon glyphicon-hand-left' />,
    HandUp: <span className='glyphicon glyphicon-hand-up' />,
    HandDown: <span className='glyphicon glyphicon-hand-down' />,
    CircleArrowRight: <span className='glyphicon glyphicon-circle-arrow-right' />,
    CircleArrowLeft: <span className='glyphicon glyphicon-circle-arrow-left' />,
    CircleArrowUp: <span className='glyphicon glyphicon-circle-arrow-up' />,
    CircleArrowDown: <span className='glyphicon glyphicon-circle-arrow-down' />,
    Globe: <span className='glyphicon glyphicon-globe' />,
    Wrench: <span className='glyphicon glyphicon-wrench' />,
    Tasks: <span className='glyphicon glyphicon-tasks' />,
    Filter: <span className='glyphicon glyphicon-filter' />,
    Briefcase: <span className='glyphicon glyphicon-briefcase' />,
    Fullscreen: <span className='glyphicon glyphicon-fullscreen' />,
    Dog: <span className='glyphicon glyphicon-dog' />,
    Girl: <span className='glyphicon glyphicon-girl' />,
    Car: <span className='glyphicon glyphicon-car' />,
    UserAdd: <span className='glyphicon glyphicon-user-add' />,
    UserRemove: <span className='glyphicon glyphicon-user-remove' />,
    Magic: <span className='glyphicon glyphicon-magic' />,
    BeachUmbrella: <span className='glyphicon glyphicon-beach-umbrella' />,
    Train: <span className='glyphicon glyphicon-train' />,
    Bin: <span className='glyphicon glyphicon-bin' />,
    Note: <span className='glyphicon glyphicon-note' />,
    Cogwheel: <span className='glyphicon glyphicon-cogwheel' />,
    Snowflake: <span className='glyphicon glyphicon-snowflake' />,
    Cogwheels: <span className='glyphicon glyphicon-cogwheels' />,
    Parents: <span className='glyphicon glyphicon-parents' />,
    Binoculars: <span className='glyphicon glyphicon-binoculars' />,
    Cars: <span className='glyphicon glyphicon-cars' />,
    Bus: <span className='glyphicon glyphicon-bus' />,
    WifiAlt: <span className='glyphicon glyphicon-wifi-alt' />,
    Luggage: <span className='glyphicon glyphicon-luggage' />,
    OldMan: <span className='glyphicon glyphicon-old-man' />,
    Woman: <span className='glyphicon glyphicon-woman' />,
    Credit: <span className='glyphicon glyphicon-credit' />,
    Airplane: <span className='glyphicon glyphicon-airplane' />,
    Notes: <span className='glyphicon glyphicon-notes' />,
    Stats: <span className='glyphicon glyphicon-stats' />,
    Charts: <span className='glyphicon glyphicon-charts' />,
    PieChart: <span className='glyphicon glyphicon-pie-chart' />,
    Group: <span className='glyphicon glyphicon-group' />,
    Keys: <span className='glyphicon glyphicon-keys' />,
    Router: <span className='glyphicon glyphicon-router' />,
    CameraSmall: <span className='glyphicon glyphicon-camera-small' />,
    Dislikes: <span className='glyphicon glyphicon-dislikes' />,
    Link: <span className='glyphicon glyphicon-link' />,
    Alarm: <span className='glyphicon glyphicon-alarm' />,
    Clock: <span className='glyphicon glyphicon-clock' />,
    Stopwatch: <span className='glyphicon glyphicon-stopwatch' />,
    Projector: <span className='glyphicon glyphicon-projector' />,
    History: <span className='glyphicon glyphicon-history' />,
    Truck: <span className='glyphicon glyphicon-truck' />,
    Cargo: <span className='glyphicon glyphicon-cargo' />,
    Compass: <span className='glyphicon glyphicon-compass' />,
    Keynote: <span className='glyphicon glyphicon-keynote' />,
    Attach: <span className='glyphicon glyphicon-attach' />,
    Power: <span className='glyphicon glyphicon-power' />,
    Lightbulb: <span className='glyphicon glyphicon-lightbulb' />,
    Cleaning: <span className='glyphicon glyphicon-cleaning' />,
    Ruller: <span className='glyphicon glyphicon-ruller' />,
    Umbrella: <span className='glyphicon glyphicon-umbrella' />,
    Cup: <span className='glyphicon glyphicon-cup' />,
    Stroller: <span className='glyphicon glyphicon-stroller' />,
    Headset: <span className='glyphicon glyphicon-headset' />,
    Roundabout: <span className='glyphicon glyphicon-roundabout' />,
    Heat: <span className='glyphicon glyphicon-heat' />,
    Display: <span className='glyphicon glyphicon-display' />,
    LogBook: <span className='glyphicon glyphicon-log-book' />,
    AdressBook: <span className='glyphicon glyphicon-adress-book' />,
    Table: <span className='glyphicon glyphicon-table' />,
    Crop: <span className='glyphicon glyphicon-crop' />,
    VectorPathSquare: <span className='glyphicon glyphicon-vector-path-square' />,
    VectorPathCircle: <span className='glyphicon glyphicon-vector-path-circle' />,
    VectorPathPolygon: <span className='glyphicon glyphicon-vector-path-polygon' />,
    VectorPathLine: <span className='glyphicon glyphicon-vector-path-line' />,
    VectorPathCurve: <span className='glyphicon glyphicon-vector-path-curve' />,
    VectorPathAll: <span className='glyphicon glyphicon-vector-path-all' />,
    TextUnderline: <span className='glyphicon glyphicon-text-underline' />,
    TextStrike: <span className='glyphicon glyphicon-text-strike' />,
    TextResize: <span className='glyphicon glyphicon-text-resize' />,
    LeftIndent: <span className='glyphicon glyphicon-left-indent' />,
    RightIndent: <span className='glyphicon glyphicon-right-indent' />,
    Justify: <span className='glyphicon glyphicon-justify' />,
    TextSmaller: <span className='glyphicon glyphicon-text-smaller' />,
    TextBigger: <span className='glyphicon glyphicon-text-bigger' />,
    Embed: <span className='glyphicon glyphicon-embed' />,
    EmbedClose: <span className='glyphicon glyphicon-embed-close' />,
    MessageFull: <span className='glyphicon glyphicon-message-full' />,
    MessageEmpty: <span className='glyphicon glyphicon-message-empty' />,
    MessageIn: <span className='glyphicon glyphicon-message-in' />,
    MessageOut: <span className='glyphicon glyphicon-message-out' />,
    MessagePlus: <span className='glyphicon glyphicon-message-plus' />,
    MessageMinus: <span className='glyphicon glyphicon-message-minus' />,
    MessageBan: <span className='glyphicon glyphicon-message-ban' />,
    MessageFlag: <span className='glyphicon glyphicon-message-flag' />,
    MessageLock: <span className='glyphicon glyphicon-message-lock' />,
    MessageNew: <span className='glyphicon glyphicon-message-new' />,
    InboxPlus: <span className='glyphicon glyphicon-inbox-plus' />,
    InboxMinus: <span className='glyphicon glyphicon-inbox-minus' />,
    InboxLock: <span className='glyphicon glyphicon-inbox-lock' />,
    InboxIn: <span className='glyphicon glyphicon-inbox-in' />,
    InboxOut: <span className='glyphicon glyphicon-inbox-out' />,
    ComputerLocked: <span className='glyphicon glyphicon-computer-locked' />,
    ComputerService: <span className='glyphicon glyphicon-computer-service' />,
    ComputerProces: <span className='glyphicon glyphicon-computer-proces' />,
    Phone: <span className='glyphicon glyphicon-phone' />,
    DatabaseLock: <span className='glyphicon glyphicon-database-lock' />,
    DatabasePlus: <span className='glyphicon glyphicon-database-plus' />,
    DatabaseMinus: <span className='glyphicon glyphicon-database-minus' />,
    DatabaseBan: <span className='glyphicon glyphicon-database-ban' />,
    FolderPlus: <span className='glyphicon glyphicon-folder-plus' />,
    FolderMinus: <span className='glyphicon glyphicon-folder-minus' />,
    FolderLock: <span className='glyphicon glyphicon-folder-lock' />,
    FolderFlag: <span className='glyphicon glyphicon-folder-flag' />,
    FolderNew: <span className='glyphicon glyphicon-folder-new' />,
    NewWindow: <span className='glyphicon glyphicon-new-window' />,
    MoreWindows: <span className='glyphicon glyphicon-more-windows' />,
    ShowBigThumbnails: <span className='glyphicon glyphicon-show-big-thumbnails' />,
    ShowThumbnails: <span className='glyphicon glyphicon-show-thumbnails' />,
    ShowThumbnailsWithLines: <span className='glyphicon glyphicon-show-thumbnails-with-lines' />,
    ShowLines: <span className='glyphicon glyphicon-show-lines' />,
    Playlist: <span className='glyphicon glyphicon-playlist' />,
    Imac: <span className='glyphicon glyphicon-imac' />,
    Macbook: <span className='glyphicon glyphicon-macbook' />,
    Ipad: <span className='glyphicon glyphicon-ipad' />,
    Iphone: <span className='glyphicon glyphicon-iphone' />,
    IphoneTransfer: <span className='glyphicon glyphicon-iphone-transfer' />,
    IphoneExchange: <span className='glyphicon glyphicon-iphone-exchange' />,
    Ipod: <span className='glyphicon glyphicon-ipod' />,
    IpodShuffle: <span className='glyphicon glyphicon-ipod-shuffle' />,
    EarPlugs: <span className='glyphicon glyphicon-ear-plugs' />,
    Albums: <span className='glyphicon glyphicon-albums' />,
    Rewind: <span className='glyphicon glyphicon-rewind' />,
    Mute: <span className='glyphicon glyphicon-mute' />,
    More: <span className='glyphicon glyphicon-more' />,
    BrightnessReduce: <span className='glyphicon glyphicon-brightness-reduce' />,
    BrightnessIncrease: <span className='glyphicon glyphicon-brightness-increase' />,
    CirclePlus: <span className='glyphicon glyphicon-circle-plus' />,
    CircleMinus: <span className='glyphicon glyphicon-circle-minus' />,
    CircleRemove: <span className='glyphicon glyphicon-circle-remove' />,
    CircleOk: <span className='glyphicon glyphicon-circle-ok' />,
    CircleQuestionMark: <span className='glyphicon glyphicon-circle-question-mark' />,
    CircleInfo: <span className='glyphicon glyphicon-circle-info' />,
    CircleExclamationMark: <span className='glyphicon glyphicon-circle-exclamation-mark' />,
    Ban: <span className='glyphicon glyphicon-ban' />,
    Unlock: <span className='glyphicon glyphicon-unlock' />,
    Electricity: <span className='glyphicon glyphicon-electricity' />,
    CartOut: <span className='glyphicon glyphicon-cart-out' />,
    CartIn: <span className='glyphicon glyphicon-cart-in' />,
    LeftArrow: <span className='glyphicon glyphicon-left-arrow' />,
    RightArrow: <span className='glyphicon glyphicon-right-arrow' />,
    DownArrow: <span className='glyphicon glyphicon-down-arrow' />,
    UpArrow: <span className='glyphicon glyphicon-up-arrow' />,
    CircleArrowTop: <span className='glyphicon glyphicon-circle-arrow-top' />,
    PlayButton: <span className='glyphicon glyphicon-play-button' />,
    Unshare: <span className='glyphicon glyphicon-unshare' />,
    ThinRightArrow: <span className='glyphicon glyphicon-thin-right-arrow' />,
    ThinArrowLeft: <span className='glyphicon glyphicon-thin-arrow-left' />,
    Bluetooth: <span className='glyphicon glyphicon-bluetooth' />,
    Euro: <span className='glyphicon glyphicon-euro' />,
    Usd: <span className='glyphicon glyphicon-usd' />,
    Bp: <span className='glyphicon glyphicon-bp' />,
    Moon: <span className='glyphicon glyphicon-moon' />,
    Sun: <span className='glyphicon glyphicon-sun' />,
    Cloud: <span className='glyphicon glyphicon-cloud' />,
    Direction: <span className='glyphicon glyphicon-direction' />,
    Brush: <span className='glyphicon glyphicon-brush' />,
    Pen: <span className='glyphicon glyphicon-pen' />,
    Pin: <span className='glyphicon glyphicon-pin' />,
    Riflescope: <span className='glyphicon glyphicon-riflescope' />,
    RotationLock: <span className='glyphicon glyphicon-rotation-lock' />,
    Flash: <span className='glyphicon glyphicon-flash' />,
    GoogleMaps: <span className='glyphicon glyphicon-google-maps' />,
    Anchor: <span className='glyphicon glyphicon-anchor' />,
    Conversation: <span className='glyphicon glyphicon-conversation' />,
    Chat: <span className='glyphicon glyphicon-chat' />,
    Male: <span className='glyphicon glyphicon-male' />,
    Female: <span className='glyphicon glyphicon-female' />,
    Divide: <span className='glyphicon glyphicon-divide' />,
    SnorkelDiving: <span className='glyphicon glyphicon-snorkel-diving' />,
    ScubaDiving: <span className='glyphicon glyphicon-scuba-diving' />,
    OxygenBottle: <span className='glyphicon glyphicon-oxygen-bottle' />,
    Fins: <span className='glyphicon glyphicon-fins' />,
    Fishes: <span className='glyphicon glyphicon-fishes' />,
    Boat: <span className='glyphicon glyphicon-boat' />,
    DeletePoint: <span className='glyphicon glyphicon-delete-point' />,
    Pool: <span className='glyphicon glyphicon-pool' />,
    Buoy: <span className='glyphicon glyphicon-buoy' />,
    Spade: <span className='glyphicon glyphicon-spade' />,
    Bank: <span className='glyphicon glyphicon-bank' />,
    Vcard: <span className='glyphicon glyphicon-vcard' />,
    ElectricalPlug: <span className='glyphicon glyphicon-electrical-plug' />,
    CreditCard: <span className='glyphicon glyphicon-credit-card' />,
    KeyboardWireless: <span className='glyphicon glyphicon-keyboard-wireless' />,
    KeyboardWired: <span className='glyphicon glyphicon-keyboard-wired' />,
    Shield: <span className='glyphicon glyphicon-shield' />,
    Ring: <span className='glyphicon glyphicon-ring' />,
    Cake: <span className='glyphicon glyphicon-cake' />,
    Drink: <span className='glyphicon glyphicon-drink' />,
    Beer: <span className='glyphicon glyphicon-beer' />,
    FastFood: <span className='glyphicon glyphicon-fast-food' />,
    Cutlery: <span className='glyphicon glyphicon-cutlery' />,
    Pizza: <span className='glyphicon glyphicon-pizza' />,
    BirthdayCake: <span className='glyphicon glyphicon-birthday-cake' />,
    Tablet: <span className='glyphicon glyphicon-tablet' />,
    Settings: <span className='glyphicon glyphicon-settings' />,
    Bullets: <span className='glyphicon glyphicon-bullets' />,
    Cardio: <span className='glyphicon glyphicon-cardio' />,
    Pants: <span className='glyphicon glyphicon-pants' />,
    Sweater: <span className='glyphicon glyphicon-sweater' />,
    Fabric: <span className='glyphicon glyphicon-fabric' />,
    Leather: <span className='glyphicon glyphicon-leather' />,
    Scissors: <span className='glyphicon glyphicon-scissors' />,
    Podium: <span className='glyphicon glyphicon-podium' />,
    Skull: <span className='glyphicon glyphicon-skull' />,
    Celebration: <span className='glyphicon glyphicon-celebration' />,
    TeaKettle: <span className='glyphicon glyphicon-tea-kettle' />,
    FrenchPress: <span className='glyphicon glyphicon-french-press' />,
    CoffeCup: <span className='glyphicon glyphicon-coffe-cup' />,
    Pot: <span className='glyphicon glyphicon-pot' />,
    Grater: <span className='glyphicon glyphicon-grater' />,
    Kettle: <span className='glyphicon glyphicon-kettle' />,
    Hospital: <span className='glyphicon glyphicon-hospital' />,
    HospitalH: <span className='glyphicon glyphicon-hospital-h' />,
    Microphone: <span className='glyphicon glyphicon-microphone' />,
    Webcam: <span className='glyphicon glyphicon-webcam' />,
    TempleChristianityChurch: <span className='glyphicon glyphicon-temple-christianity-church' />,
    TempleIslam: <span className='glyphicon glyphicon-temple-islam' />,
    TempleHindu: <span className='glyphicon glyphicon-temple-hindu' />,
    TempleBuddhist: <span className='glyphicon glyphicon-temple-buddhist' />,
    ElectricalSocketEu: <span className='glyphicon glyphicon-electrical-socket-eu' />,
    ElectricalSocketUs: <span className='glyphicon glyphicon-electrical-socket-us' />,
    Bomb: <span className='glyphicon glyphicon-bomb' />,
    Comments: <span className='glyphicon glyphicon-comments' />,
    Flower: <span className='glyphicon glyphicon-flower' />,
    Baseball: <span className='glyphicon glyphicon-baseball' />,
    Rugby: <span className='glyphicon glyphicon-rugby' />,
    Ax: <span className='glyphicon glyphicon-ax' />,
    TableTennis: <span className='glyphicon glyphicon-table-tennis' />,
    Bowling: <span className='glyphicon glyphicon-bowling' />,
    TreeConifer: <span className='glyphicon glyphicon-tree-conifer' />,
    TreeDeciduous: <span className='glyphicon glyphicon-tree-deciduous' />,
    Sort: <span className='glyphicon glyphicon-sort' />,
    Gamepad: <span className='glyphicon glyphicon-gamepad' />,
    PlayingDices: <span className='glyphicon glyphicon-playing-dices' />,
    Calculator: <span className='glyphicon glyphicon-calculator' />,
    Tie: <span className='glyphicon glyphicon-tie' />,
    Wallet: <span className='glyphicon glyphicon-wallet' />,
    Sampler: <span className='glyphicon glyphicon-sampler' />,
    Piano: <span className='glyphicon glyphicon-piano' />,
    WebBrowser: <span className='glyphicon glyphicon-web-browser' />,
    Blog: <span className='glyphicon glyphicon-blog' />,
    Dashboard: <span className='glyphicon glyphicon-dashboard' />,
    Candle: <span className='glyphicon glyphicon-candle' />,
    PinClassic: <span className='glyphicon glyphicon-pin-classic' />,
    IphoneShake: <span className='glyphicon glyphicon-iphone-shake' />,
    PinFlag: <span className='glyphicon glyphicon-pin-flag' />,
    Turtle: <span className='glyphicon glyphicon-turtle' />,
    Rabbit: <span className='glyphicon glyphicon-rabbit' />,
    ShoppingBag: <span className='glyphicon glyphicon-shopping-bag' />,
    BookOpen: <span className='glyphicon glyphicon-book-open' />,
    Nameplate: <span className='glyphicon glyphicon-nameplate' />,
    NameplateAlt: <span className='glyphicon glyphicon-nameplate-alt' />,
    Vases: <span className='glyphicon glyphicon-vases' />,
    Announcement: <span className='glyphicon glyphicon-announcement' />,
    Dumbbell: <span className='glyphicon glyphicon-dumbbell' />,
    Suitcase: <span className='glyphicon glyphicon-suitcase' />,
    FileImport: <span className='glyphicon glyphicon-file-import' />,
    FileExport: <span className='glyphicon glyphicon-file-export' />,
    Pinterest: <span className='glyphicon glyphicon-pinterest' />,
    Dropbox: <span className='glyphicon glyphicon-dropbox' />,
    Jolicloud: <span className='glyphicon glyphicon-jolicloud' />,
    Yahoo: <span className='glyphicon glyphicon-yahoo' />,
    Blogger: <span className='glyphicon glyphicon-blogger' />,
    Picasa: <span className='glyphicon glyphicon-picasa' />,
    Amazon: <span className='glyphicon glyphicon-amazon' />,
    Tumblr: <span className='glyphicon glyphicon-tumblr' />,
    Wordpress: <span className='glyphicon glyphicon-wordpress' />,
    Instapaper: <span className='glyphicon glyphicon-instapaper' />,
    Evernote: <span className='glyphicon glyphicon-evernote' />,
    Xing: <span className='glyphicon glyphicon-xing' />,
    Zootool: <span className='glyphicon glyphicon-zootool' />,
    Dribbble: <span className='glyphicon glyphicon-dribbble' />,
    Deviantart: <span className='glyphicon glyphicon-deviantart' />,
    ReadItLater: <span className='glyphicon glyphicon-read-it-later' />,
    LinkedIn: <span className='glyphicon glyphicon-linked-in' />,
    Forrst: <span className='glyphicon glyphicon-forrst' />,
    Pinboard: <span className='glyphicon glyphicon-pinboard' />,
    Behance: <span className='glyphicon glyphicon-behance' />,
    Github: <span className='glyphicon glyphicon-github' />,
    Youtube: <span className='glyphicon glyphicon-youtube' />,
    Skitch: <span className='glyphicon glyphicon-skitch' />,
    Quora: <span className='glyphicon glyphicon-quora' />,
    GooglePlus: <span className='glyphicon glyphicon-google-plus' />,
    Spotify: <span className='glyphicon glyphicon-spotify' />,
    Stumbleupon: <span className='glyphicon glyphicon-stumbleupon' />,
    Readability: <span className='glyphicon glyphicon-readability' />,
    Facebook: <span className='glyphicon glyphicon-facebook' />,
    TwitterT: <span className='glyphicon glyphicon-twitter-t' />,
    Twitter: <span className='glyphicon glyphicon-twitter' />,
    Buzz: <span className='glyphicon glyphicon-buzz' />,
    Vimeo: <span className='glyphicon glyphicon-vimeo' />,
    Flickr: <span className='glyphicon glyphicon-flickr' />,
    LastFm: <span className='glyphicon glyphicon-last-fm' />,
    Rss: <span className='glyphicon glyphicon-rss' />,
    Skype: <span className='glyphicon glyphicon-skype' />
};

module.exports = GlyphiconConstants;
// export default GlyphiconConstants;

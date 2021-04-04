import React from 'react';
import _ from 'lodash';

export default class Icon extends React.Component {
    render() {
        let icon = _.get(this.props, 'icon', null);
        return (
            <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            	{(icon === 'apple-podcasts') ? (
            	<path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z"/>
            	) : ((icon === 'arrow-left') ? (
            	<path d="M22 10.75h-15.212l6.988-6.988-1.775-1.763-10 10 10 10 1.763-1.763-6.975-6.988h15.212v-2.5z" />
            	) : ((icon === 'arrow-right') ? (
            	<path d="M12 2l-1.762 1.763 6.975 6.988h-15.212v2.5h15.212l-6.975 6.988 1.763 1.762 10-10z" />
                ) : ((icon === 'imdb') ? (
            	<path d="M14.31 9.588v.005c-.077-.048-.227-.07-.42-.07v4.815c.27 0 .44-.06.5-.165.062-.104.095-.405.095-.885v-2.866c0-.33-.004-.54-.033-.63-.022-.096-.067-.163-.14-.204zM22.416 0H1.62C.742.06.06.744 0 1.596V22.38c.06.874.712 1.542 1.555 1.617.015.003.03.003.045.003h20.845c.88-.088 1.55-.826 1.555-1.71V1.71C24 .82 23.305.07 22.416 0zM4.792 15.626H2.887V8.26h1.905v7.366zm6.54-.002H9.67v-4.97L9 15.623H7.812l-.698-4.86-.007 4.86H5.44V8.26h2.468c.083.523.16 1.048.23 1.574l.27 1.87.442-3.444h2.483v7.364zm4.977-2.18c0 .655-.044 1.094-.104 1.32-.062.22-.17.4-.326.52-.15.13-.34.218-.57.266-.223.045-.57.075-1.02.075l-.004-.002H11.98V8.26h1.426c.914 0 1.45.047 1.77.128.325.09.575.225.745.42.165.18.273.404.313.645.05.235.076.705.076 1.402v2.588zm4.944.475c0 .45-.045.764-.09.99-.06.224-.195.404-.405.568-.226.166-.48.24-.78.24-.22 0-.5-.06-.68-.136-.19-.094-.358-.237-.515-.427l-.116.47h-1.717V8.26l-.02-.003h1.8v2.4c.15-.175.315-.31.51-.4.196-.083.466-.127.69-.127.226-.003.45.036.66.115.17.07.32.185.436.33.09.125.15.27.18.42.03.138.044.43.044.87v2.054zM19.08 11.205c-.12 0-.194.04-.225.12-.03.08-.06.29-.06.624v1.946c0 .324.03.533.06.623.04.086.13.14.226.134.12 0 .272-.047.3-.14.03-.097.046-.32.046-.674l.03-.002v-1.89c0-.303-.015-.508-.06-.603-.044-.1-.195-.14-.315-.14z" />
                ) : ((icon === 'amazon') ? (
            	<path d="M1.8054 12.403c-.0699-.096-.144-.1746-.144-.3538v-.5945c0-.2523.0179-.484-.168-.6576-.1466-.1408-.3892-.1903-.5752-.1903-.3635 0-.7688.136-.8542.5849-.0087.0476.0258.0728.0573.08l.3703.0398c.0345-.0014.0597-.0358.066-.0703.032-.1544.1616-.2292.3073-.2292.0786 0 .1679.0292.214.099.0538.0787.0466.1864.0466.2772v.0495c-.2214.0248-.511.0413-.7183.1325-.2393.1034-.4072.314-.4072.6242 0 .3965.2504.595.5717.595.2718 0 .4198-.064.6295-.2776.0694.1005.0922.1495.219.2548.0285.015.0649.0136.0902-.0092l.294-.2524c.0312-.0257.0253-.067.001-.102m-.68-.5765c0 .149.0035.2728-.0713.4053-.0606.1072-.1572.1732-.2645.1732-.1465 0-.232-.1116-.232-.2766 0-.3257.2917-.3844.5679-.3844zm5.6864.5766c-.0694-.0961-.1441-.1747-.1441-.3539v-.5945c0-.2523.018-.484-.168-.6576-.1465-.1408-.3892-.1903-.5751-.1903-.3636 0-.7688.136-.8537.5849-.0093.0476.0257.0728.0568.08l.3703.0398c.0344-.0014.0596-.0358.066-.0703.032-.1544.1616-.2292.3072-.2292.0786 0 .168.0292.214.099.0539.0787.0466.1864.0466.2772v.0495c-.2213.0248-.511.0413-.7178.1325-.2397.1034-.4076.314-.4076.6242 0 .3965.2504.595.5717.595.2717 0 .4202-.064.63-.2776.0689.1005.0916.1495.2188.2548a.0788.0788 0 0 0 .0898-.0092l.001.001c.0767-.068.215-.1883.293-.2534.0312-.0257.0259-.067.0011-.102m-.7513-.1712c-.0607.1072-.1572.1732-.2646.1732-.1465 0-.232-.1116-.232-.2766 0-.3257.2918-.3844.568-.3844v.0825c0 .149.0038.2728-.0714.4053m5.16.5307h-.3806a.0717.0717 0 0 1-.0684-.0704l-.0007-1.9608c.0032-.0359.0349-.064.0734-.064h.3542a.0725.0725 0 0 1 .0678.0547v.2999h.0073c.107-.2682.2566-.396.5204-.396.1711 0 .3387.0618.4457.231.0998.1567.0998.4206.0998.6104v1.2335c-.0043.0347-.0355.0617-.0732.0617h-.3829a.072.072 0 0 1-.068-.0617v-1.0643c0-.2145.025-.528-.2388-.528-.0927 0-.1782.0619-.221.1567-.0535.1197-.0607.2393-.0607.3713v1.0554a.073.073 0 0 1-.0743.0706M9.612 10.6259c.5668 0 .8733.4868.8733 1.1055 0 .598-.3385 1.0724-.8733 1.0724-.5561 0-.8592-.4868-.8592-1.0931 0-.6104.3066-1.0848.8592-1.0848m.0035.4002c-.2817 0-.2994.3835-.2994.6227 0 .2392-.0036.7507.296.7507.2958 0 .31-.4125.31-.664 0-.1649-.0071-.363-.057-.5197-.0428-.1362-.1285-.1897-.2496-.1897m-7.062 1.7364h-.3819a.0719.0719 0 0 1-.0683-.0646l.0003-1.96c0-.0393.033-.0706.0738-.0706h.3556c.0372.0017.067.03.0694.0657v.256h.0071c.0927-.2476.2674-.363.5027-.363.2388 0 .3886.1154.4954.363.0928-.2476.3031-.363.5277-.363.1605 0 .3351.066.4421.2144.1212.165.0963.4042.0963.6146l-.0004 1.237c0 .039-.033.0705-.0737.0705h-.3813a.0715.0715 0 0 1-.0686-.0704v-1.0392c0-.0824.007-.2886-.0109-.367-.0284-.132-.114-.1692-.2244-.1692-.0928 0-.189.062-.2283.1608-.0392.0991-.0356.264-.0356.3754v1.039c0 .0392-.033.0706-.0737.0706h-.3815a.0716.0716 0 0 1-.0685-.0704l-.0004-1.0392c0-.2185.0356-.5402-.2352-.5402-.2745 0-.2638.3134-.2638.5402l-.0002 1.039c0 .0392-.033.0706-.0737.0706m4.5791-1.7494v-.28a.0692.0692 0 0 1 .071-.071h1.2553c.0402 0 .0724.0291.0724.0706v.2402c-.0003.0403-.0343.0929-.0945.1763l-.6502.9284c.2413-.0056.4967.0306.716.1538.0494.0278.0627.069.0666.1093v.2989c0 .0411-.0451.0888-.0925.064-.3863-.2024-.8991-.2245-1.3263.0025-.0437.0232-.0894-.0238-.0894-.065v-.284c0-.0455.0009-.1233.0467-.1926l.7534-1.0808h-.656c-.04 0-.0722-.0286-.0725-.0706m.8171 2.1613c-.0917-.1174-.606-.0556-.8372-.028-.07.0084-.0809-.0527-.0179-.097.4105-.2882 1.0829-.205 1.1611-.1085.0787.0973-.0207.7715-.4052 1.0933-.0592.0494-.1155.023-.0892-.0423.0865-.2161.2802-.7.1884-.8175m-.2983.3406c-.717.529-1.7563.8105-2.6514.8105-1.2543 0-2.384-.4638-3.2388-1.2355-.067-.0607-.0072-.1434.0735-.0965.9222.5366 2.0628.8598 3.2406.8598.7947 0 1.6681-.1649 2.4719-.5058.1211-.0514.2228.0799.1042.1675m15.5297-.693c-.342 0-.6045-.0938-.7879-.2813-.1835-.1875-.275-.4563-.275-.8065 0-.3584.0935-.6397.2811-.8437.1875-.204.4481-.3061.7817-.3061.2565 0 .4571.062.6019.1861.1447.1241.2171.2895.2171.4963 0 .2068-.078.3634-.2337.4694-.1558.1063-.3853.1593-.6887.1593-.157 0-.2936-.0151-.4094-.0455.0165.1847.0724.3171.1675.397.0952.08.2392.12.4323.12.0771 0 .1522-.0048.2253-.0145.073-.0096.1744-.031.304-.064a.163.163 0 0 1 .0455-.0084c.0468 0 .0703.0318.0703.0952v.1902c0 .0441-.0062.0752-.0185.093-.0125.018-.0366.0339-.0725.0476-.2013.0772-.415.1158-.641.1158m-.1365-1.2986c.1406 0 .2426-.0214.306-.0641.0634-.0428.0952-.1083.0952-.1965 0-.1738-.1034-.2606-.3102-.2606-.2647 0-.4177.1628-.4591.488.1103.0221.233.0332.3681.0332M18.6275 12.76c-.0359 0-.0622-.0082-.0786-.0248-.0166-.0165-.0248-.0427-.0248-.0786V10.75c0-.0387.0082-.0655.0248-.0807.0164-.0151.0427-.0227.0786-.0227h.2977c.0634 0 .102.0303.1159.091l.033.1116c.1461-.0965.2778-.1647.395-.2047.1171-.04.2378-.06.362-.06.248 0 .4231.0882.5251.2647.1407-.0937.273-.1613.3972-.2026.124-.0414.2522-.062.3846-.062.193 0 .3425.0536.4487.1612.1061.1076.1593.258.1593.4508v1.46c0 .0359-.0077.062-.0228.0786-.0152.0166-.042.0248-.0807.0248h-.397c-.0359 0-.062-.0082-.0785-.0248-.0166-.0165-.025-.0427-.025-.0786V11.329c0-.1875-.084-.2813-.2522-.2813-.1489 0-.2992.0359-.4508.1075v1.5014c0 .0359-.0076.062-.0228.0786-.0152.0166-.042.0248-.0806.0248h-.397c-.036 0-.0621-.0082-.0787-.0248-.0165-.0165-.0248-.0427-.0248-.0786V11.329c0-.1875-.0842-.2813-.2523-.2813-.1544 0-.306.0373-.4549.1116v1.4973c0 .0359-.0077.062-.0227.0786-.0153.0166-.0422.0248-.0807.0248zm-.9174-2.4402c-.1048 0-.1888-.029-.2522-.0869-.0635-.0578-.0952-.1364-.0952-.2357s.0317-.1778.0952-.2357c.0634-.058.1474-.0869.2523-.0869.1046 0 .1888.029.2522.0869.0634.0579.0952.1364.0952.2357s-.0318.1779-.0952.2357c-.0634.058-.1476.087-.2523.087m-.1985 2.4401c-.0358 0-.062-.0083-.0786-.0249-.0166-.0164-.0248-.0426-.0248-.0785V10.75c0-.0386.0082-.0655.0248-.0807.0165-.0151.0428-.0227.0786-.0227h.397c.0386 0 .0655.0076.0807.0227.0151.0152.0228.042.0228.0807v1.9066c0 .036-.0077.062-.0228.0785-.0152.0166-.042.025-.0807.025zm-1.6527 0c-.0359 0-.0622-.0082-.0786-.0248-.0166-.0165-.0248-.0427-.0248-.0786V10.75c0-.0387.0082-.0655.0248-.0807.0164-.0151.0427-.0227.0786-.0227h.2977c.0634 0 .102.0303.1158.091l.0538.2233c.1103-.1214.2144-.2075.3123-.2585a.6664.6664 0 0 1 .3123-.0765h.0578c.0386 0 .0662.0076.0827.0227.0166.0152.0248.042.0248.0807v.3474c0 .0358-.0076.062-.0227.0785-.0151.0166-.042.025-.0807.025a.8293.8293 0 0 1-.0744-.0043 1.3657 1.3657 0 0 0-.1158-.0041c-.0634 0-.1406.009-.2316.0269-.091.018-.1682.0407-.2316.0683v1.3896c0 .0359-.0077.062-.0227.0786-.0153.0166-.0422.0248-.0807.0248zm-2.477.852c-.0358 0-.062-.0077-.0786-.0227-.0165-.0153-.0248-.042-.0248-.0807V10.75c0-.0386.0083-.0655.0248-.0807.0166-.0151.0428-.0227.0786-.0227h.2978c.0634 0 .102.0304.1157.091l.029.1075c.0828-.08.1827-.1433.2999-.1903a.9562.9562 0 0 1 .3578-.0703c.2673 0 .479.098.6348.2937.1558.1958.2337.4605.2337.794 0 .229-.0386.4288-.1157.5997-.0772.171-.1821.3027-.3144.395-.1324.0925-.284.1386-.4549.1386a.965.965 0 0 1-.3226-.0538c-.1021-.0358-.189-.0854-.2606-.1489v.9058c0 .0386-.0076.0654-.0227.0807-.0153.015-.0421.0227-.0807.0227zm.9057-1.2615c.1545 0 .2682-.0523.3413-.157.073-.1048.1097-.2703.1097-.4964 0-.2288-.036-.3956-.1076-.5005-.0718-.1048-.1862-.1571-.3434-.1571a.7883.7883 0 0 0-.4052.1116v1.0878c.1212.0744.2564.1116.4052.1116Z" />
                ) : ((icon === 'roku') ? (
            	<path d="M16.34 9.853l-2.254 2.254v-2.26H12.13v5.744h1.957v-2.33l2.353 2.33h2.46l-2.988-2.99 2.477-2.476v3.411c0 1.133.679 2.177 2.393 2.177.815 0 1.56-.462 1.922-.88l.88.759H24v-5.74h-1.951v3.718c-.22.384-.528.627-1.002.627-.482 0-.703-.286-.703-1.198V9.853zm-4.591 2.869A3.004 3.004 0 1 1 8.738 9.73a2.997 2.997 0 0 1 3.011 2.99m-3.011-1.57c-.518 0-.956.704-.956 1.572 0 .867.438 1.57.956 1.57.528 0 .968-.702.968-1.57 0-.869-.438-1.572-.968-1.572zm-2.206 4.447H4.313L2.55 13.153h-.594v2.44H0V8.26h2.8c1.616 0 2.935 1.1 2.935 2.45 0 .826-.505 1.562-1.273 2.013l2.07 2.875m-2.75-4.888A1.226 1.226 0 0 0 2.56 9.478h-.604v2.453h.605a1.225 1.225 0 0 0 1.22-1.221Z" />
                ) : ((icon === 'close') ? (
            	<path d="M23.962 1.412L22.55 0 11.981 10.57 1.411 0 0 1.412l10.57 10.57L0 22.55l1.412 1.412 10.57-10.57 10.568 10.57 1.412-1.412-10.57-10.569z"/>
            	) : ((icon === 'facebook') ? (
            	<path d="M23.998 12c0-6.628-5.372-12-11.999-12C5.372 0 0 5.372 0 12c0 5.988 4.388 10.952 10.124 11.852v-8.384H7.078v-3.469h3.046V9.356c0-3.008 1.792-4.669 4.532-4.669 1.313 0 2.686.234 2.686.234v2.953H15.83c-1.49 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.384c5.736-.9 10.124-5.864 10.124-11.853z"/>
            	) : ((icon === 'github') ? (
            	<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            	) : ((icon === 'google-podcasts') ? (
            	<path d="M1.503 9.678c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zm20.994 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.587c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.62c0-.83-.67-1.5-1.5-1.5zm0-9.817c-.83 0-1.5.67-1.5 1.5v5.357a1.5 1.5 0 003 0V6.258c0-.83-.67-1.5-1.5-1.5zm10.638 0c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 003 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0V1.5c0-.83-.67-1.499-1.5-1.499zm0 19.355c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 103 .01v-1.64c0-.82-.67-1.5-1.5-1.5zm5.319-8.457c-.83 0-1.5.68-1.5 1.5v5.328a1.5 1.5 0 003 0v-5.329c0-.83-.67-1.5-1.5-1.5zM12 6.128c-.83 0-1.5.68-1.5 1.5v8.728a1.5 1.5 0 003 0V7.638c0-.83-.67-1.5-1.5-1.5z"/>
            	) : ((icon === 'instagram') ? (
            	<path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a5.885 5.885 0 001.384 2.126A5.868 5.868 0 004.14 23.37c.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558a5.898 5.898 0 002.126-1.384 5.86 5.86 0 001.384-2.126c.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913a5.89 5.89 0 00-1.384-2.126A5.847 5.847 0 0019.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227a3.81 3.81 0 01-.899 1.382 3.744 3.744 0 01-1.38.896c-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421a3.716 3.716 0 01-1.379-.899 3.644 3.644 0 01-.9-1.38c-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z"/>
            	) : ((icon === 'linkedin') ? (
            	<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            	) : ((icon === 'menu') ? (
            	<path d="M19 11v1.92H0V11zm5-8v1.92H0V3zm-2 16v1.92H0V19z"/>
            	) : ((icon === 'mixcloud') ? (
            	<path d="M2.462 8.596l1.372 6.49h.319l1.372-6.49h2.462v6.808H6.742v-5.68l.232-.81h-.402l-1.43 6.49H2.854l-1.44-6.49h-.391l.222.81v5.68H0V8.596zM24 8.63v1.429L21.257 12 24 13.941v1.43l-3.235-2.329h-.348l-3.226 2.329v-1.43l2.734-1.94-2.733-1.942V8.63l3.225 2.338h.348zm-7.869 2.75v1.24H9.304v-1.24z"/>
            	) : ((icon === 'overcast') ? (
            	<path d="M12 24C5.389 24.018.017 18.671 0 12.061V12C0 5.35 5.351 0 12 0s12 5.35 12 12c0 6.649-5.351 12-12 12zm0-4.751l.9-.899-.9-3.45-.9 3.45.9.899zm-1.15-.05L10.4 20.9l1.05-1.052-.6-.649zm2.3 0l-.6.601 1.05 1.051-.45-1.652zm.85 3.102L12 20.3l-2 2.001c.65.1 1.3.199 2 .199s1.35-.05 2-.199zM12 1.5C6.201 1.5 1.5 6.201 1.5 12c-.008 4.468 2.825 8.446 7.051 9.899l2.25-8.35c-.511-.372-.809-.968-.801-1.6 0-1.101.9-2.001 2-2.001s2 .9 2 2.001c0 .649-.301 1.2-.801 1.6l2.25 8.35c4.227-1.453 7.06-5.432 7.051-9.899 0-5.799-4.701-10.5-10.5-10.5zm6.85 15.7c-.255.319-.714.385-1.049.15-.313-.207-.4-.628-.194-.941.014-.021.028-.04.044-.06 0 0 1.35-1.799 1.35-4.35s-1.35-4.35-1.35-4.35c-.239-.289-.198-.719.091-.957.02-.016.039-.031.06-.044.335-.235.794-.169 1.049.15.1.101 1.65 2.15 1.65 5.2S18.949 17.1 18.85 17.2zm-3.651-1.95c-.3-.3-.249-.85.051-1.15 0 0 .75-.799.75-2.1s-.75-2.051-.75-2.1c-.3-.301-.3-.801-.051-1.15.232-.303.666-.357.969-.125.029.022.056.047.082.074C16.301 8.75 17.5 10 17.5 12s-1.199 3.25-1.25 3.301c-.301.299-.75.25-1.051-.051zm-6.398 0c-.301.301-.75.35-1.051.051C7.699 15.199 6.5 14 6.5 12s1.199-3.199 1.25-3.301c.301-.299.801-.299 1.051.051.3.3.249.85-.051 1.15 0 .049-.75.799-.75 2.1s.75 2.1.75 2.1c.3.3.351.799.051 1.15zm-2.602 2.101c-.335.234-.794.169-1.05-.15C5.051 17.1 3.5 15.05 3.5 12s1.551-5.1 1.649-5.2c.256-.319.715-.386 1.05-.15.313.206.4.628.194.941-.013.02-.028.04-.043.059C6.35 7.65 5 9.449 5 12s1.35 4.35 1.35 4.35c.25.3.15.75-.151 1.001z"/>
            	) : ((icon === 'pocket-casts') ? (
            	<path d="M12,0C5.372,0,0,5.372,0,12c0,6.628,5.372,12,12,12c6.628,0,12-5.372,12-12 C24,5.372,18.628,0,12,0z M15.564,12c0-1.968-1.596-3.564-3.564-3.564c-1.968,0-3.564,1.595-3.564,3.564 c0,1.968,1.595,3.564,3.564,3.564V17.6c-3.093,0-5.6-2.507-5.6-5.6c0-3.093,2.507-5.6,5.6-5.6c3.093,0,5.6,2.507,5.6,5.6H15.564z M19,12c0-3.866-3.134-7-7-7c-3.866,0-7,3.134-7,7c0,3.866,3.134,7,7,7v2.333c-5.155,0-9.333-4.179-9.333-9.333 c0-5.155,4.179-9.333,9.333-9.333c5.155,0,9.333,4.179,9.333,9.333H19z"/>
            	) : ((icon === 'spotify') ? (
            	<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            	) : ((icon === 'soundcloud') ? (
            	<path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.06 0-.091.037-.104.094L0 14.479l.165 1.308c0 .055.045.094.09.094s.089-.045.104-.104l.21-1.319-.21-1.334c0-.061-.044-.09-.09-.09m1.83-1.229c-.061 0-.12.045-.12.104l-.21 2.563.225 2.458c0 .06.045.12.119.12.061 0 .105-.061.121-.12l.254-2.474-.254-2.548c-.016-.06-.061-.12-.121-.12m.945-.089c-.075 0-.135.06-.15.135l-.193 2.64.21 2.544c.016.077.075.138.149.138.075 0 .135-.061.15-.15l.24-2.532-.24-2.623c0-.075-.06-.135-.135-.135l-.031-.017zm1.155.36c-.005-.09-.075-.149-.159-.149-.09 0-.158.06-.164.149l-.217 2.43.2 2.563c0 .09.075.157.159.157.074 0 .148-.068.148-.158l.227-2.563-.227-2.444.033.015zm.809-1.709c-.101 0-.18.09-.18.181l-.21 3.957.187 2.563c0 .09.08.164.18.164.094 0 .174-.09.18-.18l.209-2.563-.209-3.972c-.008-.104-.088-.18-.18-.18m.959-.914c-.105 0-.195.09-.203.194l-.18 4.872.165 2.548c0 .12.09.209.195.209.104 0 .194-.089.21-.209l.193-2.548-.192-4.856c-.016-.12-.105-.21-.21-.21m.989-.449c-.121 0-.211.089-.225.209l-.165 5.275.165 2.52c.014.119.104.225.225.225.119 0 .225-.105.225-.225l.195-2.52-.196-5.275c0-.12-.105-.225-.225-.225m1.245.045c0-.135-.105-.24-.24-.24-.119 0-.24.105-.24.24l-.149 5.441.149 2.503c.016.135.121.24.256.24s.24-.105.24-.24l.164-2.503-.164-5.456-.016.015zm.749-.134c-.135 0-.255.119-.255.254l-.15 5.322.15 2.473c0 .15.12.255.255.255s.255-.12.255-.27l.15-2.474-.165-5.307c0-.148-.12-.27-.271-.27m1.005.166c-.164 0-.284.135-.284.285l-.103 5.143.135 2.474c0 .149.119.277.284.277.149 0 .271-.12.284-.285l.121-2.443-.135-5.112c-.012-.164-.135-.285-.285-.285m1.184-.945c-.045-.029-.105-.044-.165-.044s-.119.015-.165.044c-.09.054-.149.15-.149.255v.061l-.104 6.048.115 2.449v.008c.008.06.03.135.074.18.058.061.142.104.234.104.08 0 .158-.044.209-.09.058-.06.091-.135.091-.225l.015-.24.117-2.203-.135-6.086c0-.104-.061-.193-.135-.239l-.002-.022zm1.006-.547c-.045-.045-.09-.061-.15-.061-.074 0-.149.016-.209.061-.075.061-.119.15-.119.24v.029l-.137 6.609.076 1.215.061 1.185c0 .164.148.314.328.314.181 0 .33-.15.33-.329l.15-2.414-.15-6.637c0-.12-.074-.221-.165-.277m8.934 3.777c-.405 0-.795.086-1.139.232-.24-2.654-2.46-4.736-5.188-4.736-.659 0-1.305.135-1.889.359-.225.09-.27.18-.285.359v9.368c.016.18.15.33.33.345h8.185C22.681 17.218 24 15.914 24 14.28s-1.319-2.952-2.938-2.952"/>
            	) : ((icon === 'twitter') ? (
            	<path d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
            	) : ((icon === 'youtube') ? (
            	<path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/>
            	) : ((icon === 'vimeo') && (
            	<path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.493 4.797l-.013.01z"/>
              )))))))))))))))))))))}
            </svg>
        );
    }
}

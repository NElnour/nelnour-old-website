var blob = document.querySelector('path');
blob.setAttribute('fill', "#FF0066");

blob.setAttribute('d', "M 33.6,-49 \
                        C 42.2, -39.9, 47.1, -28.4, 55.9, -14.9 \
                        C 64.8, -1.5, 77.6, 13.9, 76.4, 27.1 \
                        C 75.2, 40.2, 60.1, 51, 45, 54.9 \
                        C 29.9, 58.8, 15, 55.7, 0.2, 55.4 \
                        C -14.5, 55.1, -29,57.5, -41.5, 52.8 \
                        C -53.9, 48, -64.2, 36.1, -70.1, 21.9 \
                        C -75.9, 7.6, -77.4, -9, -68.8, -18.4 \
                        C -60.3, -27.7, -41.7, -29.8, -28.6, -37.4 \
                        C -15.4, -45.1, -7.7, -58.3, 2.4, -61.6 \
                        C 12.4, -64.8, 24.9, -58.1, 33.6, -49 Z")


setInterval(function () {
    console.log('blobbing')
    blob.setAttribute('d', "M 33.6,-49 \
                            C 42.2, -39.9, 47.1, -28.4, 55.9, -14.9 \
                            C 64.8, -1.5, 77.6, 13.9, 76.4, 27.1 \
                            C 75.2, 40.2, 60.1, 51, 45, 54.9 \
                            C 29.9, 58.8, 15, 55.7, 0.2, 55.4 \
                            C -14.5, 55.1, -29,57.5, -41.5, 52.8 \
                            C -53.9, 48, -64.2, 36.1, -70.1, 21.9 \
                            C -75.9, 7.6, -77.4, -9, -68.8, -18.4 \
                            C -60.3, -27.7, -41.7, -29.8, -28.6, -37.4 \
                            C -15.4, -45.1, -7.7, -58.3, 2.4, -61.6 \
                            C 12.4, -64.8, 24.9, -58.1, 33.6, -49 Z")
}, 500);

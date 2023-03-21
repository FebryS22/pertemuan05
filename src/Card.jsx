function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-brown-200 to-purple-600">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="mt-12 block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                        Kartu Tanda Penduduk
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class=" mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="nama"
                                placeholder="Angeline"
                            />
                             <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="tempat lahir"
                            >
                                Tempat lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="tempat lahir"
                                id="tempat lahir"
                                placeholder="Banyuwangi"
                            />
                             <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="tanggal lahir"
                            >
                                Tanggal lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="tanggal lahir"
                                id="tanggal lahir"
                                placeholder="22 februari 2002"
                            />
                              <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="jenis kelamin"
                            >
                                Jenis kelamin
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="jenis kelamin"
                                id="jenis kelamin"
                                placeholder="Perempuan"
                            />
                             <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="alamat"
                            >
                                Alamat
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="alamat"
                                id="alamat"
                                placeholder="kmp pinebentengang"
                            />
                             <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="agama"
                            >
                                Agama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="agama"
                                id="agama"
                                placeholder="Kristen"
                            />
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="pekerjaan"
                            >
                                Pekerjaan
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Pekerjaan"
                                id="Pekerjaan"
                                placeholder="Pelajar"
                        />
                         <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="kewarganegaraan"
                            >
                             kewarganegaraan   
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="kewarganegaraan"
                                id="kewarganegaraan"
                                placeholder="WNI"
                        />
                        </div>
                       
                    </form>
                    <img class="rounded w-40 h-60" src="enjianjg.jpg"/>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;
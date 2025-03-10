const headerDom = document.getElementById("header-sticky");
headerDom.className =
    "sticky top-0 left-0 right-0 shadow-md bg-white z-[99] px-4 py-2";
headerDom.innerHTML = `
<div class="container mx-auto flex justify-between items-center">
                <!-- Logo -->

                <div class="block md:hidden" id="menu-button">
                        <button >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>
                <a class="flex items-center space-x-2" href="../../../lumigems/index.html">
                    <img
                        src="../../../lumigems/assets/imgs/logo.png"
                        alt="Logo"
                        class="h-10 w-10"
                    />
                    <span class="font-bold text-lg">LumiGems</span>
                </a>

                <!-- Navigation -->
                <nav class="md:flex items-center justify-end gap-4 hidden">
                    <ul class="flex items-center justify-end gap-4">
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/index.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Trang chủ</a
                            >
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/products.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Sản phẩm</a
                            >
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/blogs/index.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                            >
                                Blogs
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="size-4"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            </a>
                            <ul
                                class="blogs-navlinks absolute left-0 top-full w-full min-w-60 bg-white border border-gray-200 shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block"
                            >
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-lua.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"

                                        >NHÓM LỬA</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nuoc.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"

                                        >NHÓM NƯỚC</a
                                    >
                                </li>
                                  <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-khi.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM KHÍ</a
                                    >
                                </li>
                                <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-dat.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM ĐẤT</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-kim.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH KIM</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-moc.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH MỘC</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-thuy.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH THỦY</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-hoa.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH HỎA</a
                                    >
                                </li>
                                 <li class="flex justify-center items-center">
                                    <a
                                        href="../../../lumigems/blogs/nhom-nguoi-menh-tho.html"
                                        class="w-full px-2 py-1 lg:px-4 lg:py-2 text-black hover:bg-gray-100"
                                        >NHÓM NGƯỜI MỆNH THỔ</a
                                    >
                                </li>
                            </ul>
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="../../../lumigems/cart.html"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Giỏ hàng</a
                            >
                        </li>
                        <li
                            class="flex justify-center items-center relative group"
                        >
                            <a
                                href="#"
                                class="w-full text-black hover:text-orange-500 px-4 py-2 flex justify-center items-center"
                                >Tài khoản</a
                            >
                        </li>
                    </ul>

                    <button class="md:flex justify-center items-center hidden ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="size-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                            />
                        </svg>
                    </button>
                </nav>
            </div>
            <!-- Mobile Menu (Hidden by default) -->
<div
  id="mobile-menu"
  class="bg-white shadow-sm md:hidden hidden transition-all duration-500 transform origin-top"
>
  <ul class="grid grid-cols-1 gap-2">
    <li class="flex justify-center items-center">
      <a href="../../../lumigems/index.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
        Trang chủ
      </a>
    </li>
    <li class="flex justify-center items-center">
      <a href="../../../lumigems/products.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
        Sản phẩm
      </a>
    </li>
    <li class="flex justify-center items-center">
      <a href="../../../lumigems/blogs/index.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
        Blogs
      </a>
    </li>
    <li class="flex justify-center items-center">
      <a href="../../../lumigems/cart.html" class="w-full text-black hover:text-orange-500 px-4 py-2">
        Giỏ hàng
      </a>
    </li>
    <li class="flex justify-center items-center">
      <a href="#" class="w-full text-black hover:text-orange-500 px-4 py-2">
        Tài khoản
      </a>
    </li>
  </ul>
</div>

`;

const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden"); // Show/Hide the mobile menu
    mobileMenu.classList.toggle("animate-slide-down"); // Trigger the slide-down animation
});

function renderActiveRouteBlog() {
    const blogsNavLinks = document.querySelectorAll(".blogs-navlinks > li > a");
    // console.log(blogsNavLinks);
    const activeLink = [...blogsNavLinks].find((link) => {
        const href = link.getAttribute("href");
        return href.includes(window.location.pathname);
    });
    activeLink.classList.add("font-semibold");
}
renderActiveRouteBlog();

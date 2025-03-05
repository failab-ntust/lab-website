"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";
import MarqueeEffect from "react-fast-marquee";

const partners = [
    { name: "台北富邦銀行", logo: "/partners/fubon.jpg" },
    { name: "鈊象電子", logo: "/partners/iGS.jpg" },
    { name: "英業達", logo: "/partners/inventec.jpg" },
    { name: "來毅數位科技", logo: "/partners/keypasco.jpg" },
    { name: "耐斯診所", logo: "/partners/nice_clinic.jpg" },
];

export default function MarqueePartners() {
    return (
        <Box sx={{ width: "100%", overflow: "hidden", py: 2, backgroundColor: "#f4f4f4" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                <Typography variant="h6" align="center" sx={{ display: { xs: 'none', sm: 'block' } }}>
                    以下為我們的合作夥伴，歡迎企業與我們洽談合作！
                </Typography>
                <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
                    <Typography variant="h6" align="center">
                        以下為我們的合作夥伴
                    </Typography>
                    <Typography variant="h6" align="center">
                        歡迎企業與我們洽談合作！
                    </Typography>
                </Box>
            </Box>

            <Box sx={{ display: "flex", overflow: "hidden", whiteSpace: "nowrap" }}>
                <MarqueeEffect speed={50} direction="left" pauseOnHover autoFill>
                    {partners.map((partner, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                px: { xs: 3, sm: 4, md: 6 },
                                py: { xs: 1, sm: 2 },
                                mb: 1,
                                minWidth: { xs: 100, sm: 120, md: 140 },
                                maxWidth: { xs: 140, sm: 160, md: 180 },
                                borderRadius: 3,
                                backgroundColor: "#ffffff",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                marginRight: 4,
                                transition: "transform 0.3s ease-in-out",
                                "&:hover": {
                                    transform: "scale(1.05)",
                                },
                            }}
                        >
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    layout="intrinsic"
                                    width={70}
                                    height={45}
                                    style={{
                                        borderRadius: "8px",
                                        objectFit: "contain",
                                    }}
                                    sx={{
                                        width: { xs: 50, sm: 70, md: 80, lg: 90 },
                                        height: { xs: 35, sm: 45, md: 55, lg: 60 },
                                    }}
                                />
                            </Box>
                            <Typography
                                variant="caption"
                                sx={{
                                    mt: 1,
                                    textAlign: "center",
                                    color: "#555",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontWeight: 600,
                                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                                }}
                            >
                                {partner.name}
                            </Typography>
                        </Box>
                    ))}
                </MarqueeEffect>
            </Box>
        </Box>
    );
}
